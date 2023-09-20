import { twMerge } from 'tailwind-merge'

export function ButtonAdmin({ children, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        'flex justify-center items-center btn text-white font-medium h-14 hover:bg-blue disabled:opacity-70 disabled:hover:bg-green-300 disabled:cursor-not-allowed',
        props.className,
      )}
    >
      {children}
    </button>
  )
}
