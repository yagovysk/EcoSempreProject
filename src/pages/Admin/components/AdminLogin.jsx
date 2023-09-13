import { createPortal } from 'react-dom'
import { Icon } from '@iconify/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../../../components/Form/Input'
import { ErrorMessage } from '../../../components/Form/ErrorMessage'
import { useState } from 'react'
import * as Toast from '../../../components/Toast'
import api from '../../../lib/axios'
import { useNavigate } from 'react-router-dom'

const adminFormSchema = z.object({
  email: z.string().email('Email inválido').nonempty('Obrigatório'),
  password: z.string().nonempty('Obrigatório'),
})

export function AdminLogin() {
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const formAdmin = useForm({
    resolver: zodResolver(adminFormSchema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = formAdmin

  async function handleLoginAdmin(data) {
    try {
      setIsLoading(() => true)
      const { data: authentication } = await api.post('/authentication', {
        email: data.email,
        password: data.password,
      })
      setIsLoading(() => false)
      setError(() => false)

      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(today.getDate() + 1)

      const token = {
        token: authentication.token,
        expires: tomorrow.getDate(),
      }

      localStorage.setItem('@ecoSempre-v1:token', JSON.stringify(token))

      navigate('/admin', {
        replace: true,
      })
    } catch (err) {
      setIsLoading(() => false)
      setError(() => true)
    }
  }

  return (
    <main className="grid place-content-center border min-h-screen">
      <div className="flex flex-col gap-4 bg-white shadow-[0px_4px_53px_0px_rgba(45,43,43,0.13);] rounded py-14 px-10 w-[32rem] font-roboto">
        <h1 className="font-bold text-3xl text-center font-inter text-gray-800">
          Login
        </h1>

        <form
          onSubmit={handleSubmit(handleLoginAdmin)}
          className="flex flex-col gap-4 mt-3"
        >
          <FormProvider {...formAdmin}>
            <Input.Root>
              <Input.Field
                aria-label="Email"
                name="email"
                placeholder="Digite seu email"
                autoComplete="off"
              />
              {errors.email && (
                <ErrorMessage className="!static">
                  {errors.email.message}
                </ErrorMessage>
              )}
            </Input.Root>

            <Input.Root>
              <Input.Field
                aria-label="Senha"
                type="password"
                name="password"
                placeholder="Digite sua senha"
              />
              {errors.password && (
                <ErrorMessage className="!static">
                  {errors.password.message}
                </ErrorMessage>
              )}
            </Input.Root>
          </FormProvider>

          <button
            type="submit"
            className={`bg-green-300 py-2 w-full rounded text-white transition-colors hover:bg-blue disabled:hover:bg-green-300 disabled:opacity-70 disabled:cursor-not-allowed ${
              isLoading && 'animate-pulse'
            }`}
            disabled={isLoading}
          >
            <span className="font-bold leading-10 text-sm">ENTRAR</span>
          </button>
        </form>
      </div>

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
                    Email ou senha incorretos!
                  </Toast.Title>
                  <Toast.Description className="text-sm text-gray-800">
                    Verifique se as informações inseridas estão corretas ou
                    tente novamente mais tarde.
                  </Toast.Description>
                </div>
              </div>
            </Toast.Content>
          </Toast.Root>,
          document.body,
        )}
    </main>
  )
}
