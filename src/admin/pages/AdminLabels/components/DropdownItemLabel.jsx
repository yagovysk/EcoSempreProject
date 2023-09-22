import { Icon } from '@iconify/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { twMerge } from 'tailwind-merge'

export function DropdownItemEditLabel(props) {
  return (
    <DropdownMenu.Item className="outline-0">
      <button
        type="button"
        {...props}
        className={twMerge(
          'flex items-center gap-2 border-2 border-blue text-blue duration-300 transition-colors p-2 hover:bg-blue hover:text-white rounded',
          props.className,
        )}
      >
        <Icon icon="fe:edit" className="w-5 h-5" />
      </button>
    </DropdownMenu.Item>
  )
}

export function DropdownItemDeleteLabel(props) {
  return (
    <DropdownMenu.Item className="outline-0">
      <button
        type="button"
        {...props}
        className={twMerge(
          'flex items-center gap-2 border-2 border-red-500 text-red-500 rounded p-2 transition-colors duration-300 hover:bg-red-500 hover:text-white',
          props.className,
        )}
      >
        <Icon icon="ant-design:delete-filled" className="w-5 h-5" />
      </button>
    </DropdownMenu.Item>
  )
}
