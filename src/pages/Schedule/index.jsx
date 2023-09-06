import { useState } from 'react'
import { createPortal } from 'react-dom'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Icon } from '@iconify/react'

import { HeaderSection } from '../../components/HeaderSection'
import { ScrollReveal } from '../../components/ScrollReveal'
import { FormSubmitted } from '../../components/FormSubmitted'
import { FormSchedule } from './components/FormSchedule'
import * as Toast from '../../components/Toast'
import api from '../../lib/axios'

import styles from './styles.module.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Programas',
    path: '/agendar',
  },
  {
    name: 'Agende uma Coleta',
  },
]

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_FORMATS = ['image/jpeg', 'image/jpg', 'image/png']

const scheduleSchema = z.object({
  name: z
    .string()
    .nonempty('Obrigatório')
    .min(3, 'Digite um nome válido')
    .trim(),
  email: z
    .string()
    .nonempty('Obrigatório')
    .email('Digite um e-mail válido')
    .trim(),
  phone: z
    .string()
    .nonempty('Obrigatório')
    .min(8, 'Telefone inválido')
    .max(11, 'Telefone inválido'),
  cep: z.coerce
    .number({
      invalid_type_error: 'Deve conter apenas números',
    })
    .min(8, 'CEP inválido'),
  state: z.string().nonempty('Obrigatório'),
  city: z.string().nonempty('Obrigatório'),
  materials: z.string().nonempty('Obrigatório').trim(),
  attachments: z
    .any()
    .transform((files) => files && Array.from(files))
    .refine(
      (files) =>
        files &&
        files.every((file) => ACCEPTED_IMAGE_FORMATS.includes(file.type)),
      'Formato de imagem inválido',
    )
    .refine(
      (files) => files && files.every((file) => file.size <= MAX_FILE_SIZE),
      'Tamanho máximo de imagem é 5MB',
    )
    .refine(
      (files) => files && files.length <= 3,
      'Adicione no máximo até 3 imagens',
    )
    .nullish(),
})

const initialValues = {
  name: '',
  email: '',
  phone: '',
  cep: '',
  state: '',
  city: '',
  materials: '',
  attachments: null,
}

export const Schedule = () => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const scheduleForm = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: initialValues,
  })

  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = scheduleForm

  async function onSubmit(data) {
    try {
      setIsLoading(() => true)
      await api.post('/schedule-pickup', data)
      setHasError(() => false)
    } catch (err) {
      setHasError(() => true)
      setIsLoading(() => false)
    }
  }

  if (isSubmitSuccessful && !hasError) {
    return (
      <article
        className={`container ${styles.container_schedule} ${styles.form_submitted}`}
      >
        <FormSubmitted
          title="Coleta agendada com sucesso!"
          description="Agradecemos o seu contato e retornaremos em breve."
          reset={reset}
        />
      </article>
    )
  }

  return (
    <main>
      <HeaderSection
        title="Agende uma Coleta"
        linksMenu={linksMenu}
        className={styles.header}
      />
      <article className={`container ${styles.container_schedule}`}>
        <section className={`textsContainer ${styles.textsContainer}`}>
          <ScrollReveal origin="bottom">
            <span className={`small-text`}>Coleta de Lixo Eletrônico</span>
          </ScrollReveal>

          <ScrollReveal origin="bottom">
            <section className={`texts`}>
              <h2 className={`title`}>Agende uma Coleta</h2>
              <p className={`${styles.paragraph}`}>
                Agende a retirada gratuita do seu lixo eletrônico. Seu
                computador ou notebook se tornará matéria-prima para a criação
                de novos produtos. Faça a diferença e agende sua coleta agora
                mesmo.
              </p>
            </section>
          </ScrollReveal>
        </section>

        <ScrollReveal origin="bottom">
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles.form}`}
          >
            <FormProvider {...scheduleForm}>
              <FormSchedule />
            </FormProvider>
          </form>
        </ScrollReveal>
      </article>

      {hasError &&
        !isLoading &&
        createPortal(
          <Toast.Root>
            <Toast.Content forceMount={isLoading}>
              <div className="flex p-3 gap-3 mr-8">
                <Icon
                  icon="material-symbols:error"
                  className="w-6 h-6"
                  color="#DD425A"
                />
                <div className="flex flex-col gap-2 flex-1">
                  <Toast.Title className="font-medium text-gray-800">
                    Oops! Parece que ocorreu um erro
                  </Toast.Title>
                  <Toast.Description className="text-sm text-gray-800">
                    Não conseguimos enviar suas informações ao servidor.
                    Verifique sua conexão ou tente novamente mais tarde.
                  </Toast.Description>

                  <Toast.Close className="bg-red-500 p-3 rounded font-medium text-white mt-1 ml-auto text-sm/none">
                    Compreendido!
                  </Toast.Close>
                </div>
              </div>
            </Toast.Content>
          </Toast.Root>,
          document.body,
        )}
    </main>
  )
}
