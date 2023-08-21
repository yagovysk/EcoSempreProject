import { useFormContext } from 'react-hook-form'

export function Field({ name, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  return (
    <input
      {...props}
      {...register(name)}
      type={props.type || 'text'}
      className={`py-5 ${
        !error && 'focus:border-green-300 focus:shadow-input'
      } outline-none px-6 border-[1.5px] font-roboto ${
        !error ? 'border-gray-200' : 'border-red-500'
      } ${error && 'shadow-error animate-shake'} rounded ${props.className}`}
      aria-invalid={!!error}
    />
  )
}
