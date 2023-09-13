import { Icon } from '@iconify/react'
import { useAdmin } from '../../../contexts/AdminContext'
import * as Dialog from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'

export function CollectionPointsTable() {
  const {
    collectionPoints: { data },
  } = useAdmin()

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
                  // open={collectionPointDialogId === collectionPoint.id}
                  // onOpenChange={() => handleOpenDialog(collectionPoint.id)}
                >
                  <tr className="text-zinc-900">
                    <td className="p-4 bg-zinc-50 overflow-hidden">
                      <Dialog.Trigger className="max-w-[15rem] overflow-hidden text-ellipsis whitespace-nowrap">
                        {collectionPoint.name}
                      </Dialog.Trigger>

                      <Dialog.Portal>
                        <Dialog.Overlay className="z-50 bg-[rgba(22,22,27,0.67)] fixed inset-0 grid place-items-center overflow-y-auto">
                          <Dialog.Content className="bg-white p-8 pb-6 flex flex-col gap-4 rounded relative max-w-xl w-full font-roboto">
                            <Dialog.Close className="text-green-300 absolute right-8 top-8">
                              <Icon icon="ic:round-close" className="w-6 h-6" />
                            </Dialog.Close>

                            <Dialog.Title className="text-zinc-950 font-IBM-plex-sans font-bold text-2xl">
                              {collectionPoint.name}
                            </Dialog.Title>
                            <Dialog.Description className="text-gray-600 whitespace-pre-wrap mt-2">
                              <div>Endereço: {collectionPoint.address} </div>
                              <div>CEP: {collectionPoint.cep} </div>
                              <div>Estado: {collectionPoint.state} </div>
                              <div>Cidade: {collectionPoint.city} </div>
                              <div>Tamanho: {collectionPoint.size}</div>
                            </Dialog.Description>

                            <div className="flex border-t pt-3 mt-2">
                              <button
                                type="button"
                                className="text-red-500 p-2 w-max rounded border-2 border-transparent transition-colors hover:border-red-500"
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
                          </Dialog.Content>
                        </Dialog.Overlay>
                      </Dialog.Portal>
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
