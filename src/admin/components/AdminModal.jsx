import { Icon } from '@iconify/react'
import * as Dialog from '@radix-ui/react-dialog'

export function AdminModal({ children, ...props }) {
  return (
    <Dialog.Portal {...props}>
      <Dialog.Overlay className="bg-[rgba(22,22,27,0.67)] fixed inset-0 grid place-items-center overflow-y-auto z-50">
        <Dialog.Content className="bg-white p-8 pb-6 flex flex-col gap-4 rounded relative max-w-xl w-full font-roboto">
          <Dialog.Close className="text-green-300 absolute right-8 top-8">
            <Icon icon="ic:round-close" className="w-6 h-6" />
          </Dialog.Close>

          {children}
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
