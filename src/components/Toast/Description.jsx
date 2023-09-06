import * as Toast from '@radix-ui/react-toast'

export function Description({ children, ...props }) {
  return <Toast.Description {...props}>{children}</Toast.Description>
}
