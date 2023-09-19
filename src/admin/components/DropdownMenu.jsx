import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

export function DropdownMenu({ children }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        side="top"
        sideOffset={5}
        className="bg-white rounded p-2 shadow-[-4px_0_20px_rgba(0,0,0,0.1)] flex gap-1"
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
}
