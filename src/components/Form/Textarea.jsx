import { useFormContext } from 'react-hook-form'

export function Textarea({ name, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  return (
    <textarea
      {...props}
      {...register(name)}
      className={`py-5 ${
        !error && 'focus:border-green-300 focus:shadow-input'
      } outline-none px-6 border-[1.5px] ${
        !error ? 'border-gray-200' : 'border-red-500'
      } ${
        error && 'shadow-error animate-shake'
      } resize-none font-roboto rounded ${props.className}`}
    />
  )
}
