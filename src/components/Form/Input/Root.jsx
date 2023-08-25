export function Root({ children, ...props }) {
  return (
    <div
      {...props}
      className={`flex relative flex-col gap-2 ${props.className}`}
    >
      {children}
    </div>
  )
}
