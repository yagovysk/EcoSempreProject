import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { dateFormatter } from '../../../utils/dateFormatter'
import { Icon } from '@iconify/react'
import { useAdmin } from '../../../contexts/AdminContext'

import api from '../../../lib/axios'

export function ContactsTable() {
  const [contactDialogId, setContactDialogId] = useState(null)
  const token = JSON.parse(localStorage.getItem('@ecoSempre-v1:token'))

  const {
    contacts: { data, error, mutate },
  } = useAdmin()

  const contacts = data && [...data].reverse()

  useEffect(() => {
    if (error) {
      alert(
        'Perdemos a conexão com o servidor. Verifique a sua internet ou tente novamente mais tarde.',
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleOpenDialog(id) {
    setContactDialogId((prevId) => {
      if (prevId === id) {
        return null
      } else {
        return id
      }
    })
  }

  async function handleDeleteContact(id) {
    const agreed = confirm('Você tem certeza que quer deletar esse contato?')

    if (!agreed) return

    try {
      await api.delete(`/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      const newData = contacts.filter((contact) => contact.id !== id)
      mutate(newData)
      setContactDialogId(null)
    } catch (err) {
      alert(
        'Não conseguimos deletar o contato. Verifique a sua internet ou tente novamente mais tarde.',
      )
    }
  }

  return (
    <div className="overflow-auto w-full max-h-[750px]">
      <table className="min-w-[600px] w-full font-roboto">
        <thead>
          <tr className="bg-zinc-200 text-zinc-900 overflow-hidden">
            <th className="p-4 rounded-tl text-left text-sm">Nome</th>
            <th className="p-4 text-left text-sm">E-mail</th>
            <th className="p-4 text-left text-sm">Conteúdo</th>
            <th className="p-4 text-left text-sm">Telefone</th>
            <th className="p-4 rounded-tr text-left text-sm">Data</th>
          </tr>
        </thead>
        <tbody>
          {contacts ? (
            contacts.map((contact) => {
              return (
                <Dialog.Root
                  key={contact.id}
                  open={contactDialogId === contact.id}
                  onOpenChange={() => handleOpenDialog(contact.id)}
                >
                  <tr className="text-zinc-900">
                    <td className="p-4 bg-zinc-50 capitalize">
                      <Dialog.Trigger className="overflow-hidden capitalize w-full text-left text-ellipsis whitespace-nowrap">
                        {contact.name}
                      </Dialog.Trigger>

                      <Dialog.Portal>
                        <Dialog.Overlay className="bg-[rgba(22,22,27,0.67)] fixed inset-0 grid place-items-center overflow-y-auto z-50">
                          <Dialog.Content className="bg-white p-8 pb-6 flex flex-col gap-4 rounded relative max-w-xl w-full font-roboto">
                            <Dialog.Close className="text-green-300 absolute right-8 top-8">
                              <Icon icon="ic:round-close" className="w-6 h-6" />
                            </Dialog.Close>

                            <Dialog.Title className="text-zinc-950 font-IBM-plex-sans font-bold text-2xl">
                              {contact.subject}
                            </Dialog.Title>
                            <Dialog.Description className="text-gray-600 whitespace-pre-wrap mt-2">
                              {contact.message}
                            </Dialog.Description>

                            <address className="flex text-sm text-zinc-950 flex-wrap gap-2 w-full not-italic">
                              <div className="capitalize">{contact.name}</div> |
                              <a
                                className="text-blue underline"
                                href={`mailto:${contact.email}`}
                              >
                                {contact.email}
                              </a>{' '}
                              |<div>{contact.phone}</div>
                            </address>

                            <div className="grid border-t pt-3 mt-2">
                              <button
                                type="button"
                                className="text-red-500 p-2 w-max rounded border-2 border-transparent transition-colors hover:border-red-500"
                                onClick={() => handleDeleteContact(contact.id)}
                              >
                                <Icon
                                  icon="ant-design:delete-filled"
                                  className="w-5 h-5"
                                />
                              </button>
                            </div>
                          </Dialog.Content>
                        </Dialog.Overlay>
                      </Dialog.Portal>
                    </td>
                    <td className="p-4 bg-zinc-50 overflow-hidden text-ellipsis">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue underline"
                      >
                        {contact.email}
                      </a>
                    </td>

                    <td className="p-4 bg-zinc-50 max-w-[15rem] overflow-hidden text-ellipsis whitespace-nowrap">
                      <strong className="text-zinc-500">
                        {contact.subject}{' '}
                      </strong>
                      <span className="text-gray-500">{contact.message}</span>
                    </td>
                    <td className="p-4 bg-zinc-50 max-w-[15rem]">
                      {contact.phone}
                    </td>
                    <td className="p-4 bg-zinc-50 max-w-[15rem]">
                      {dateFormatter(contact.createdAt)}
                    </td>
                  </tr>
                </Dialog.Root>
              )
            })
          ) : (
            <tr className="text-zinc-900">
              <td className="p-4">Sem contatos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
