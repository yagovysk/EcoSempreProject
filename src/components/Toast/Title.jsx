import * as Toast from '@radix-ui/react-toast'

export function Title({ children, ...props }) {
  return <Toast.Title {...props}>{children}</Toast.Title>
}
