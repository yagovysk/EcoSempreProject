export function Content({ children, ...props }) {
  return (
    <div {...props} className={`lg:max-w-[37rem] ${props.className}`}>
      {children}
    </div>
  )
}
