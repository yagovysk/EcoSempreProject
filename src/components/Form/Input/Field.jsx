/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

export const Field = forwardRef(({ name, ...props }, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  const registerInput = name ? register(name) : {}

  return (
    <input
      ref={ref}
      {...props}
      {...registerInput}
      type={props.type || 'text'}
      className={`input-form ${
        error &&
        'border-red-500 shadow-error animate-shake focus:border-red-500 focus:shadow-error'
      } ${props.className}`}
      aria-invalid={!!error}
    />
  )
})
