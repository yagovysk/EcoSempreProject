export function ImageContainer({ children, ...props }) {
  return (
    <div {...props} className={`relative ${props.className}`}>
      {children}
    </div>
  )
}
