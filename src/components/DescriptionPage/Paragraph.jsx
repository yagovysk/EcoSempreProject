export function Paragraph({ children, ...props }) {
  return (
    <p
      {...props}
      className={`text-gray-600 leading-relaxed font-roboto ${props.className}`}
    >
      {children}
    </p>
  )
}
