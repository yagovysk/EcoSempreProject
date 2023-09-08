import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from '@iconify/react'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ErrorMessage } from '../../../../components/Form/ErrorMessage'
import * as Toast from '../../../../components/Toast'
import api from '../../../../lib/axios'

import styles from './styles.module.css'

const formNewsletterSchema = z.object({
  email: z.string().email('Email inválido'),
})

export function Newsletter() {
  const [successful, setSuccessful] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(formNewsletterSchema),
  })

  async function handleRegisterNewsletter(data) {
    try {
      setIsLoading(() => true)

      await api.post('/newsletter', {
        email: data.email,
      })

      setSuccessful(() => true)
      setError(() => false)
    } catch (err) {
      setError(() => true)
      setIsLoading(() => false)
      setSuccessful(() => false)
    }
    reset()
  }

  return (
    <div className={styles.newsletter_wrapper}>
      <section className={styles.newsletter_content}>
        <p className={styles.paragraph_newsletter}>
          Inscreva-se para receber alertas, nossas últimas notícias e novidades
          da EcoSempre. Caso queira,você pode retirar sua inscrição a qualquer
          momento.
        </p>

        <form
          onSubmit={handleSubmit(handleRegisterNewsletter)}
          className={`${styles.wrapper_form} ${
            errors.email && 'animate-shake relative border-red-500'
          }`}
        >
          <label className="flex-1">
            <input
              className={`${styles.input} border border-red-500`}
              type="text"
              placeholder="Digite seu email"
              aria-label="Digite seu email"
              {...register('email')}
            />
            {errors.email && (
              <ErrorMessage className="text-xs absolute -bottom-5">
                {errors.email.message}
              </ErrorMessage>
            )}
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Inscrever-se"
            className={`${styles.btn_newsletter} ${
              isSubmitting && 'animate-pulse'
            }`}
          >
            <Icon
              icon="material-symbols:arrow-circle-right-rounded"
              className={styles.arrow_circle_icon}
              aria-hidden
            />
          </button>
        </form>
      </section>

      <div className={styles.wrapper_social_medias}>
        <p className={styles.paragraph_social_medias}>
          Siga-nos nas redes sociais
        </p>
        <div className={styles.social_medias}>
          <a
            target="_blank"
            aria-label="Instagram"
            className={styles.link_social_medias}
            href="www.instagram.com"
          >
            <Icon icon="entypo-social:instagram-with-circle" aria-hidden />
          </a>
          <a
            target="_blank"
            aria-label="Facebook"
            className={styles.link_social_medias}
            href="www.facebook.com"
          >
            <Icon icon="ic:baseline-facebook" aria-hidden />
          </a>
          <a
            target="_blank"
            aria-label="WhatsApp"
            className={styles.link_social_medias}
            href="www.whatsapp.com"
          >
            <Icon icon="ri:whatsapp-fill" aria-hidden />
          </a>
        </div>
      </div>

      {successful &&
        isSubmitSuccessful &&
        createPortal(
          <Toast.Root>
            <Toast.Content colorProgressBar="#00c756">
              <div className="flex p-3 gap-3 mr-8">
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  className="w-6 h-6"
                  color="#00C756"
                />
                <div className="flex flex-col gap-2 flex-1">
                  <Toast.Title className="font-medium text-gray-800">
                    Seu email foi cadastrado com sucesso!
                  </Toast.Title>
                  <Toast.Description className="text-sm text-gray-800 pb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    minima deserunt tenetur adipisci dolores.
                  </Toast.Description>
                </div>
              </div>
            </Toast.Content>
          </Toast.Root>,
          document.body,
        )}

      {error &&
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
    </div>
  )
}
