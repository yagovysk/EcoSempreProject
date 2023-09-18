import { twMerge } from 'tailwind-merge'

export function HeadingAdmin({ children, ...props }) {
  return (
    <h1
      {...props}
      className={twMerge(
        'text-gray-800 text-3xl font-IBM-plex-sans',
        props.className,
      )}
    >
      {children}
    </h1>
  )
}
