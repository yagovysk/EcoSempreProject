export function Subtitle({ subtitle, ...props }) {
  return (
    <span
      {...props}
      className={`font-semibold text-green-300 text-base font-roboto ${props.className}`}
    >
      {subtitle}
    </span>
  )
}
