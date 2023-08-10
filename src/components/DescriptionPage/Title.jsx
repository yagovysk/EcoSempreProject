export function Title({ title, ...props }) {
  return (
    <h2
      {...props}
      className={`font-IBM-plex-sans text-blue font-bold text-[2rem] leading-10 md:text-title md:leading-[3.375rem] ${props.className}`}
    >
      {title}
    </h2>
  )
}
