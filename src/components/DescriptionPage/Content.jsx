export function Content({ children, ...props }) {
  return (
    <section {...props} className={`lg:max-w-[37rem] ${props.className}`}>
      {children}
    </section>
  )
}
