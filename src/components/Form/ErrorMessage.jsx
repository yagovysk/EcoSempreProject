import { twMerge } from 'tailwind-merge'

export function ErrorMessage({ children, ...props }) {
  return (
    <p
      {...props}
      className={twMerge(
        `text-sm lg:absolute -bottom-7 left-0 text-red-500 font-roboto`,
        props.className,
      )}
    >
      {children}
    </p>
  )
}
