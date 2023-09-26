import { useNavigate, useParams } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { HeadingAdmin } from '../../components/HeadingAdmin'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Spinner } from '../../../components/Loader/Spinner'
import { ButtonAdmin } from '../../components/ButtonAdmin'
import { useAdmin } from '../../../contexts/AdminContext'

import api from '../../../lib/axios'
import { EditForm } from './components/EditForm'

const editCollectionPointFormSchema = z.object({
  id: z.coerce.number(),
  name: z.string().nonempty('Obrigatório'),
  address: z.string().nonempty('Obrigatório'),
  cep: z
    .string()
    .nonempty('Obrigatório')
    .min(9, 'CEP inválido')
    .max(9, 'CEP inválido'),
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

export function EditCollectionPoint() {
  const { id } = useParams()
  const {
    admin,
    collectionPoints: { data },
  } = useAdmin()

  const collectionPoint = data.find(
    (collectionPoint) => collectionPoint.id === Number(id),
  )

  const navigate = useNavigate()

  const editCollectionPointForm = useForm({
    resolver: zodResolver(editCollectionPointFormSchema),
    defaultValues: {
      name: collectionPoint.name,
      address: collectionPoint.address,
      cep: collectionPoint.cep,
      state: collectionPoint.state,
      city: collectionPoint.city,
      size: collectionPoint.size,
      category: collectionPoint.category_id
        ? {
            name: collectionPoint.name,
            id: collectionPoint.category_id,
          }
        : {
            name: '',
            id: null,
          },
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = editCollectionPointForm

  async function handleEditCollectionPoint(data) {
    try {
      await api.put(
        '/collection-point',
        {
          id: data.id,
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

      alert('Ponto de coleta editado com sucesso!')
      navigate('/admin')
    } catch (err) {
      alert(
        'Erro ao tentarmos editar seu ponto de coleta. Verifique a conexão de internet ou tente novamente mais tarde',
      )
    }
  }

  return (
    <div className="flex flex-col gap-8 ">
      <header>
        <HeadingAdmin>Editar &quot;{collectionPoint.name}&quot;</HeadingAdmin>
      </header>

      <hr />

      <main className="max-w-7xl">
        <form
          onSubmit={handleSubmit(handleEditCollectionPoint)}
          className="grid grid-cols-new-post-form gap-8 text-gray-800"
        >
          <input type="hidden" {...register('id')} value={collectionPoint.id} />
          <FormProvider {...editCollectionPointForm}>
            <EditForm />
          </FormProvider>

          <ButtonAdmin
            type="submit"
            className="col-span-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Spinner />
              </>
            ) : (
              'Editar'
            )}
          </ButtonAdmin>
        </form>
      </main>
    </div>
  )
}
