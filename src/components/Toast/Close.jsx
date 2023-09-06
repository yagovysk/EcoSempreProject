import * as Toast from '@radix-ui/react-toast'

export function Close({ children, ...props }) {
  return <Toast.Close {...props}>{children}</Toast.Close>
}
