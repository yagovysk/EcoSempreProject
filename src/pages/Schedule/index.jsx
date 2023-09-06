import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { HeaderSection } from '../../components/HeaderSection'
import { ScrollReveal } from '../../components/ScrollReveal'
import { FormSubmitted } from '../../components/FormSubmitted'

import { FormSchedule } from './components/FormSchedule'

import styles from './styles.module.css'
import { useSWRConfig } from 'swr'

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
  const { mutate } = useSWRConfig()

  const scheduleForm = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: initialValues,
  })

  const {
    handleSubmit,
    formState: { isSubmitSuccessful },
    reset,
  } = scheduleForm

  if (isSubmitSuccessful) {
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

  console.log(isSubmitSuccessful)

  async function onSubmit(data) {
    try {
      await mutate('/schedule-pickup', data)
    } catch (err) {
      throw new Response('', {
        status: err.response.status,
        statusText: err.response.statusText,
      })
    }
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
    </main>
  )
}
