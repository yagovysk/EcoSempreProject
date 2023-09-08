import { useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormSubmitted } from '../FormSubmitted'
import { Spinner } from '../Loader/Spinner'
import { Input } from '../Form/Input'
import { ErrorMessage } from '../Form/ErrorMessage'
import { Textarea } from '../Form/Textarea'
import { Icon } from '@iconify/react'

import * as Toast from '../Toast'

import api from '../../lib/axios'
import styles from './FormTalkWithUs.module.css'

const talkWithUsFormSchema = z.object({
  name: z
    .string()
    .nonempty('* O campo está vazio')
    .min(3, '* O campo não é válido')
    .toLowerCase()
    .trim(),
  email: z
    .string()
    .nonempty('* O campo está vazio')
    .email('* Esse e-mail não é válido')
    .trim(),
  phone: z
    .string()
    .nonempty('* O campo está vazio')
    .min(10, '* Digite um número de telefone válido')
    .trim(),
  subject: z
    .string()
    .nonempty('* O campo está vazio! Digite um assunto')
    .trim(),
  message: z
    .string()
    .nonempty('* O campo está vazio! Digite uma mensagem válida.')
    .trim(),
})

export function FormTalkWithUs() {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const fieldId = useId()

  const talkWithUsForm = useForm({
    resolver: zodResolver(talkWithUsFormSchema),
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = talkWithUsForm

  async function onSubmit(data) {
    try {
      setIsLoading(() => true)
      await api.post('/contact', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      })
      setHasError(() => false)
    } catch (err) {
      setHasError(() => true)
      setIsLoading(() => false)
    }
  }

  if (isSubmitSuccessful && !hasError) {
    return (
      <FormSubmitted
        title="Mensagem enviada com sucesso!"
        description="Agradecemos o seu contato e retornaremos em breve."
        reset={reset}
      />
    )
  }

  return (
    <>
      <div className={styles.form_wrapper}>
        <div>
          <div className={styles.form_title}>Fale Conosco!</div>
          <p className={styles.form_description}>
            Entre em contato conosco por meio do formulário abaixo. Estamos
            disponíveis para responder suas dúvidas, fornecer informações e
            receber suas sugestões.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form_content}>
          <FormProvider {...talkWithUsForm}>
            <div className={styles.form_inputs}>
              <Input.Root>
                <Input.Field
                  name="name"
                  placeholder="Nome"
                  aria-label="Seu nome"
                  aria-describedby={`${fieldId}-name`}
                />
                {errors.name && (
                  <ErrorMessage id={`${fieldId}-name`}>
                    {errors.name.message}
                  </ErrorMessage>
                )}
              </Input.Root>

              <Input.Root>
                <Input.Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Seu email"
                  aria-describedby={`${fieldId}-email`}
                />
                {errors.email && (
                  <ErrorMessage id={`${fieldId}-email`}>
                    {errors.email.message}
                  </ErrorMessage>
                )}
              </Input.Root>

              <Input.Root>
                <Input.Field
                  placeholder="Telefone"
                  name="phone"
                  aria-label="Seu telefone"
                  aria-describedby={`${fieldId}-phone`}
                />
                {errors.phone && (
                  <ErrorMessage id={`${fieldId}-phone`}>
                    {errors.phone.message}
                  </ErrorMessage>
                )}
              </Input.Root>

              <Input.Root>
                <Input.Field
                  placeholder="Assunto"
                  name="subject"
                  aria-label="Assunto do email"
                  aria-describedby={`${fieldId}-subject`}
                />
                {errors.subject && (
                  <ErrorMessage
                    id={`${fieldId}-subject`}
                    className="lg:whitespace-nowrap"
                  >
                    {errors.subject.message}
                  </ErrorMessage>
                )}
              </Input.Root>

              <Input.Root className="col-span-full">
                <Textarea
                  name="message"
                  aria-label="Mensagem do email"
                  placeholder="Mensagem"
                  aria-describedby={`${fieldId}-message`}
                  className="h-40"
                />
                {errors.message && (
                  <ErrorMessage id={`${fieldId}-message`}>
                    {errors.message.message}
                  </ErrorMessage>
                )}
              </Input.Root>
            </div>
          </FormProvider>

          <button
            className={`btn ${styles.btnForm} ${
              isSubmitting && styles.submitting
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && !hasError ? (
              <Spinner />
            ) : (
              <span className={styles.btn_text}>Enviar Mensagem</span>
            )}
          </button>
        </form>
      </div>

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
    </>
  )
}
