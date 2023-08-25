export function ErrorMessage({ children, ...props }) {
  return (
    <p
      {...props}
      className={`text-sm lg:absolute -bottom-7 left-0 text-red-500 font-roboto ${props.className}`}
    >
      {children}
    </p>
  )
}
