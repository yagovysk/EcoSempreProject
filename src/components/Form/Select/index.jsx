import * as SelectPrimitive from '@radix-ui/react-select'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { Icon } from '@iconify/react'
import { useFormContext } from 'react-hook-form'

export function Select({ children, placeholder, name, ...props }) {
  const {
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  return (
    <SelectPrimitive.Root {...props} onValueChange={props.onChange}>
      <SelectPrimitive.Trigger
        className={`group flex font-roboto outline-none ${
          !error ? 'focus:shadow-input focus:border-green-300' : 'shadow-error'
        } text-gray-600 items-center justify-between py-5 px-6 w-full rounded border-[1.5px] ${
          !error ? 'border-gray-200' : 'border-red-500'
        }`}
      >
        <SelectPrimitive.Value aria-label={props.value || placeholder}>
          {props.value || placeholder}
        </SelectPrimitive.Value>
        <SelectPrimitive.Icon>
          <Icon
            icon="iconamoon:arrow-down-2-bold"
            aria-hidden
            className="text-gray-600 w-6 h-6 transition-transform duration-300 group-data-[state='open']:rotate-180"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={20}
        >
          <ScrollArea.Root type="hover">
            <SelectPrimitive.Viewport asChild>
              <ScrollArea.Viewport className="w-[--radix-select-trigger-width] select-scrollbar max-h-56 bg-white rounded-lg py-4 shadow-md">
                {children}
              </ScrollArea.Viewport>
            </SelectPrimitive.Viewport>

            <ScrollArea.Scrollbar className="w-3 py-1 px-1">
              <ScrollArea.Thumb className="bg-[#c4c7ca] rounded" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
