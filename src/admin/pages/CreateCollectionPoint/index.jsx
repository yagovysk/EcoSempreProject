import { Controller, FormProvider, useForm } from 'react-hook-form'
import { HeadingAdmin } from '../../components/HeadingAdmin'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Spinner } from '../../../components/Loader/Spinner'
import { Input } from '../../../components/Form/Input'
import { ErrorMessage } from '../../../components/Form/ErrorMessage'
import { Select } from '../../../components/Form/Select'
import { SelectItem } from '../../../components/Form/Select/SelectItem'
import { ButtonAdmin } from '../../components/ButtonAdmin'
import { useAdmin } from '../../../contexts/AdminContext'

import api from '../../../lib/axios'

const states = ['Acre', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Paraíba']
const cities = [
  'Águia Branca',
  'Atalaia',
  'Arapiraca',
  'Batalha',
  'Belém',
  'Salvador',
  'São Paulo',
  'Monteiro',
  'João Pessoa',
  'Lucena',
]

const sizes = ['P', 'M', 'G', 'GG']

const createCollectionPointFormSchema = z.object({
  name: z.string().nonempty('Obrigatório'),
  address: z.string().nonempty('Obrigatório'),
  cep: z.coerce
    .number({
      invalid_type_error: 'Deve conter apenas números',
    })
    .min(8, 'CEP inválido'),
  state: z.string().nonempty('Obrigatório'),
  city: z.string().nonempty('Obrigatório'),
  size: z.string().nonempty('Obrigatório').max(2, 'Tamanho inválido'),
})

export function CreateCollectionPoint() {
  const { admin } = useAdmin()

  const createCollectionPointForm = useForm({
    resolver: zodResolver(createCollectionPointFormSchema),
    defaultValues: {
      state: '',
      city: '',
      size: '',
    },
  })

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = createCollectionPointForm

  async function handleCreateCollectionPoint(data) {
    try {
      await api.post(
        '/collection-point',
        {
          name: data.name,
          address: data.address,
          cep: data.cep,
          state: data.state,
          city: data.city,
          size: data.size,
        },
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        },
      )

      alert('Ponto de coleta adicionado com sucesso!')
      reset()
    } catch (err) {
      alert(
        'Erro ao tentarmos criar seu ponto de coleta. Verifique a conexão de internet ou tente novamente mais tarde',
      )
    }
  }

  return (
    <div className="flex flex-col gap-8 ">
      <header>
        <HeadingAdmin>Adicionar novo ponto de coleta</HeadingAdmin>
      </header>

      <hr />

      <main className="max-w-7xl">
        <form
          onSubmit={handleSubmit(handleCreateCollectionPoint)}
          className="grid grid-cols-new-post-form gap-8 text-gray-800"
        >
          <FormProvider {...createCollectionPointForm}>
            <label className="col-span-3 flex flex-col gap-2">
              <span className="font-medium">Nome</span>
              <Input.Field
                name="name"
                placeholder="Adicione o nome do ponto de coleta"
              />
              {errors.name && (
                <ErrorMessage className="!static">
                  {errors.name.message}
                </ErrorMessage>
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-medium">Tamanho do coletor</span>
              <Controller
                name="size"
                control={control}
                render={({ field }) => {
                  return (
                    <Select placeholder="Selecione o tamanho" {...field}>
                      {sizes.map((size, index) => (
                        <SelectItem key={index} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </Select>
                  )
                }}
              />
              {errors.size && (
                <ErrorMessage className="!static">
                  {errors.size.message}
                </ErrorMessage>
              )}
            </label>

            <label className="flex col-span-3 flex-col gap-2">
              <span className="font-medium">Endereço</span>
              <Input.Field
                name="address"
                placeholder="Adicione o endereço do ponto de coleta"
              />
              {errors.address && (
                <ErrorMessage className="!static">
                  {errors.address.message}
                </ErrorMessage>
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-medium">CEP</span>
              <Input.Field name="cep" placeholder="Ex: 00000-00" />
              {errors.cep && (
                <ErrorMessage className="!static">
                  {errors.cep.message}
                </ErrorMessage>
              )}
            </label>

            <label className="flex col-span-2 flex-col gap-2">
              <span className="font-medium">Estado</span>
              <Controller
                name="state"
                control={control}
                render={({ field }) => {
                  return (
                    <Select placeholder="Selecione o estado" {...field}>
                      {states.map((state, index) => (
                        <SelectItem key={index} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </Select>
                  )
                }}
              />
              {errors.state && (
                <ErrorMessage className="!static">
                  {errors.state.message}
                </ErrorMessage>
              )}
            </label>

            <label className="flex col-span-2 flex-col gap-2">
              <span className="font-medium">Cidade</span>
              <Controller
                name="city"
                control={control}
                render={({ field }) => {
                  return (
                    <Select placeholder="Selecione a cidade" {...field}>
                      {cities.map((city, index) => (
                        <SelectItem key={index} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </Select>
                  )
                }}
              />
              {errors.city && (
                <ErrorMessage className="!static">
                  {errors.city.message}
                </ErrorMessage>
              )}
            </label>
          </FormProvider>

          <ButtonAdmin className="col-span-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Spinner />
              </>
            ) : (
              'Enviar'
            )}
          </ButtonAdmin>
        </form>
      </main>
    </div>
  )
}
