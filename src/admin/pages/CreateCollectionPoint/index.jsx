import { FormProvider, useForm } from 'react-hook-form'
import { HeadingAdmin } from '../../components/HeadingAdmin'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Spinner } from '../../../components/Loader/Spinner'
import { ButtonAdmin } from '../../components/ButtonAdmin'
import { useAdmin } from '../../../contexts/AdminContext'
import { CreateForm } from './components/CreateForm'

import api from '../../../lib/axios'

const createCollectionPointFormSchema = z.object({
  name: z.string().nonempty('Obrigatório'),
  address: z.string().nonempty('Obrigatório'),
  cep: z
    .string()
    .nonempty('Obrigatório')
    .transform((cep) => cep.replace('-', ''))
    .refine((cep) => cep.length === 8, 'CEP inválido'),
  state: z.string().nonempty('Obrigatório'),
  city: z.string().nonempty('Obrigatório'),
  size: z.string().nonempty('Obrigatório').max(2, 'Tamanho inválido'),
  category: z
    .object(
      {
        name: z.string({
          required_error: 'Obrigatório',
        }),
        id: z.number({
          required_error: 'Obrigatório',
        }),
      },
      {
        required_error: 'Obrigatório',
      },
    )
    .transform((category) => category.id),
})

export function CreateCollectionPoint() {
  const {
    admin,
    collectionPoints: { mutate },
  } = useAdmin()

  const createCollectionPointForm = useForm({
    resolver: zodResolver(createCollectionPointFormSchema),
    defaultValues: {
      state: '',
      city: '',
      size: '',
      category: {
        name: '',
        id: null,
      },
    },
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
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
          category_id: data.category,
        },
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        },
      )

      alert('Ponto de coleta adicionado com sucesso!')
      reset()
      mutate()
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
            <CreateForm />
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
