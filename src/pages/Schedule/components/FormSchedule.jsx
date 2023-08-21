import { Controller, useFormContext } from 'react-hook-form'
import { useState } from 'react'

import { Input } from '../../../components/Form/Input'
import { Spinner } from '../../../components/Loader/Spinner'
import { Select } from '../../../components/Form/Select'
import { SelectItem } from '../../../components/Form/Select/SelectItem'
import { Textarea } from '../../../components/Form/Textarea'
import { ErrorMessage } from '../../../components/Form/ErrorMessage'
import { ImageInput } from './ImageInput'

import styles from '../styles.module.css'

const states = ['Acre', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Paraíba']
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
  } = useFormContext()

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
        <Input.Root>
          <Input.Field
            name="phone"
            placeholder="Digite um número de telefone"
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </Input.Root>
      </LabelInput>

      <LabelInput label="CEP">
        <Input.Root>
          <Input.Field name="cep" placeholder="00000-000" />
          {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
        </Input.Root>
      </LabelInput>

      <LabelInput label="Estado" className="relative">
        <Controller
          name="state"
          control={control}
          render={({ field }) => {
            return (
              <Select placeholder="Selecione o estado" {...field}>
                {states.map((state, index) => (
                  <SelectItem key={index} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </Select>
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
              <Select
                placeholder="Selecione a cidade"
                {...field}
                value={field.value}
                onValueChange={field.onChange}
              >
                {cities.map((city, index) => (
                  <SelectItem key={index} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </Select>
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
        disabled={isSubmitting}
        type="submit"
        className={`btn ${styles.btn} ${isSubmitting && styles.submitting}`}
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
