import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '../../../components/Form/Input'
import { StatesSelectInput } from '../../../components/StatesSelectInput'
import { StateCitiesSelectInput } from '../../../components/StateCitiesSelectInput'
import { Spinner } from '../../../components/Loader/Spinner'
import { Select } from '../../../components/Form/Select'
import { SelectItem } from '../../../components/Form/Select/SelectItem'
import { Textarea } from '../../../components/Form/Textarea'
import { ErrorMessage } from '../../../components/Form/ErrorMessage'
import { ImageInput } from './ImageInput'

import { formatInput } from '../../../utils/formatInput'

const cities = [
  'Águia Branca',
  'Atalaia',
  'Arapiraca',
  'Batalha',
  'Belém',
  'Salvador',
  'São Paulo',
  'Monteiro',
  'João Pessoa',
  'Lucena',
]

export function FormSchedule() {
  const {
    control,
    formState: { isSubmitting, errors },
    watch,
  } = useFormContext()

  const state = watch('state')

  return (
    <>
      <LabelInput className="col-span-full" label="Nome/Empresa">
        <Input.Root>
          <Input.Field
            name="name"
            placeholder="Digite seu nome completo ou o nome da sua empresa"
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Input.Root>
      </LabelInput>

      <LabelInput className="col-span-full" label="Email">
        <Input.Root>
          <Input.Field
            type="email"
            name="email"
            placeholder="Digite um endereço de email"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Input.Root>
      </LabelInput>

      <LabelInput label="Telefone">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => {
            return (
              <Input.Root>
                <input
                  className={`input-form ${
                    errors.phone &&
                    'border-red-500 shadow-error animate-shake focus:border-red-500 focus:shadow-error'
                  }`}
                  placeholder="Digite um número de telefone"
                  {...field}
                  onChange={(e) => {
                    field.onChange(formatInput.phone(e.target.value))
                  }}
                />
                {errors.phone && (
                  <ErrorMessage>{errors.phone.message}</ErrorMessage>
                )}
              </Input.Root>
            )
          }}
        />
      </LabelInput>

      <LabelInput label="CEP">
        <Controller
          name="cep"
          control={control}
          render={({ field }) => {
            return (
              <Input.Root>
                <input
                  className={`input-form ${
                    errors.cep &&
                    'border-red-500 shadow-error animate-shake focus:border-red-500 focus:shadow-error'
                  }`}
                  placeholder="00000-000"
                  {...field}
                  onChange={(e) => {
                    field.onChange(formatInput.cep(e.target.value))
                  }}
                />
                {errors.cep && (
                  <ErrorMessage>{errors.cep.message}</ErrorMessage>
                )}
              </Input.Root>
            )
          }}
        />
      </LabelInput>

      <LabelInput label="Estado" className="relative">
        <Controller
          name="state"
          control={control}
          render={({ field }) => {
            return (
              <StatesSelectInput placeholder="Selecione o estado" {...field} />
            )
          }}
        />

        {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
      </LabelInput>

      <LabelInput label="Cidade" className="relative">
        <Controller
          name="city"
          control={control}
          render={({ field }) => {
            return (
              <StateCitiesSelectInput
                disabled={!state}
                state={state}
                placeholder="Selecione a cidade"
                {...field}
              />
            )
          }}
        />
        {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
      </LabelInput>

      <LabelInput
        className="col-span-full"
        label="Quantidade e materiais que deseja descartar"
      >
        <Textarea
          name="materials"
          placeholder="Seja específico, informe os materiais e sua quantidade exata"
          className="h-36"
        />
        {errors.materials && (
          <ErrorMessage className="!static">
            {errors.materials.message}
          </ErrorMessage>
        )}
      </LabelInput>

      <ImageInput />

      <button
        type="submit"
        className={`btn text-white col-span-full font-bold font-roboto leading-10 mt-4 disabled:cursor-not-allowed disabled:opacity-60 disabled:leading-none disabled:h-[58px] hover:bg-blue disabled:hover:bg-green-300`}
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : 'Agendar Coleta'}
      </button>
    </>
  )
}

function LabelInput({ children, label, ...props }) {
  return (
    <label {...props} className={`flex flex-col gap-3 ${props.className}`}>
      <span className="font-roboto text-[#525252]  font-medium">{label}</span>
      {children}
    </label>
  )
}
