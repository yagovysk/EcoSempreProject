import { Icon } from '@iconify/react'
import { useAdmin } from '../../../../contexts/AdminContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminModal } from '../../../components/AdminModal'

import * as Dialog from '@radix-ui/react-dialog'
import api from '../../../../lib/axios'

export function CollectionPointsTable() {
  const [collectionPointDialogId, setCollectionPointDialogId] = useState(null)
  const {
    collectionPoints: { data, mutate },
    admin,
  } = useAdmin()

  const handleOpenDialog = (id) => {
    setCollectionPointDialogId((prevId) => {
      if (prevId === id) {
        return null
      } else {
        return id
      }
    })
  }

  const handleDeleteCollectionPoint = async (id) => {
    const agreed = confirm(
      'Você tem certeza que quer deletar esse ponto de coleta?',
    )

    if (!agreed) return

    try {
      await api.delete(`/collection-point`, {
        data: {
          id: data.id,
        },
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      })
      const newData = data.filter(
        (collectionPoint) => collectionPoint.id !== id,
      )
      mutate(newData)
      setCollectionPointDialogId(null)
    } catch (err) {
      alert(
        'Não conseguimos deletar o contato. Verifique a sua internet ou tente novamente mais tarde.',
      )
    }
  }

  return (
    <div className="overflow-auto max-h-[750px] w-full">
      <table className="min-w-[600px] w-full font-roboto">
        <thead>
          <tr className="bg-zinc-200 text-zinc-900 overflow-hidden">
            <th className="p-4 rounded-tl text-left text-sm">Nome</th>
            <th className="p-4 text-left text-sm">Endereço</th>
            <th className="p-4 text-left text-sm">Estado</th>
            <th className="p-4 text-left text-sm">Cidade</th>
            <th className="p-4 rounded-tr text-center text-sm">Tamanho</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((collectionPoint) => {
              return (
                <Dialog.Root
                  key={collectionPoint.id}
                  open={collectionPointDialogId === collectionPoint.id}
                  onOpenChange={() => handleOpenDialog(collectionPoint.id)}
                >
                  <tr className="text-zinc-900">
                    <td className="p-4 bg-zinc-50 overflow-hidden">
                      <Dialog.Trigger className="max-w-[15rem] overflow-hidden text-ellipsis whitespace-nowrap">
                        {collectionPoint.name}
                      </Dialog.Trigger>

                      <AdminModal>
                        <Dialog.Title className="text-zinc-950 font-IBM-plex-sans font-bold text-2xl">
                          {collectionPoint.name}
                        </Dialog.Title>
                        <Dialog.Description className="text-gray-600 whitespace-pre-wrap mt-2">
                          <div>Endereço: {collectionPoint.address} </div>
                          <div>CEP: {collectionPoint.cep} </div>
                          <div>Estado: {collectionPoint.state} </div>
                          <div>Cidade: {collectionPoint.city} </div>
                          <div>Tamanho do coletor: {collectionPoint.size}</div>
                        </Dialog.Description>

                        <div className="flex border-t pt-3 mt-2">
                          <button
                            type="button"
                            className="text-red-500 p-2 w-max rounded border-2 border-transparent transition-colors hover:border-red-500"
                            onClick={() =>
                              handleDeleteCollectionPoint(collectionPoint.id)
                            }
                          >
                            <Icon
                              icon="ant-design:delete-filled"
                              className="w-5 h-5"
                            />
                          </button>

                          <Link
                            to="/admin"
                            className="text-blue p-2 w-max rounded border-2 border-transparent transition-colors hover:border-blue"
                          >
                            <Icon icon="fe:edit" className="w-5 h-5" />
                          </Link>
                        </div>
                      </AdminModal>
                    </td>

                    <td className="p-4 bg-zinc-50 overflow-hidden text-ellipsis">
                      {collectionPoint.address} - CEP: {collectionPoint.cep}
                    </td>

                    <td className="p-4 bg-zinc-50 capitalize">
                      {collectionPoint.state}
                    </td>
                    <td className="p-4 bg-zinc-50 max-w-[15rem]">
                      {collectionPoint.city}
                    </td>
                    <td className="p-4 bg-zinc-50 max-w-[15rem] text-center">
                      {collectionPoint.size}
                    </td>
                  </tr>
                </Dialog.Root>
              )
            })
          ) : (
            <tr className="text-zinc-900">
              <td className="p-4">Nenhum ponto de coleta encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
