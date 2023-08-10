export function Root({ children, ...props }) {
  return (
    <div
      {...props}
      className={`grid px-6 gap-8 lg:grid-cols-2 ${props.className}`}
    >
      {children}
    </div>
  )
}
