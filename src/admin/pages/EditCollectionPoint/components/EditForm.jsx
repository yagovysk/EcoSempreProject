import { Controller, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../../../components/Form/ErrorMessage'
import { Input } from '../../../../components/Form/Input'
import { Select } from '../../../../components/Form/Select'
import { SelectItem } from '../../../../components/Form/Select/SelectItem'
import { CollectionPointCategoryInput } from '../../../components/CollectionPointCategoryInput'
import { formatInput } from '../../../../utils/formatInput'

export function EditForm() {
  const {
    formState: { errors },
    control,
  } = useFormContext()

  return (
    <>
      <label className="col-span-full flex flex-col gap-2">
        <span className="font-medium">Nome</span>
        <Input.Field
          name="name"
          placeholder="Adicione o nome do ponto de coleta"
        />
        {errors.name && (
          <ErrorMessage className="!static">{errors.name.message}</ErrorMessage>
        )}
      </label>

      <label className="flex col-span-3 flex-col gap-2">
        <span className="font-medium">Endereço</span>
        <Input.Field
          name="address"
          placeholder="Adicione o endereço do ponto de coleta"
        />
        {errors.address && (
          <ErrorMessage className="!static">
            {errors.address.message}
          </ErrorMessage>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-medium">CEP</span>
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
      </label>

      <label className="flex col-span-2 flex-col gap-2">
        <span className="font-medium">Estado</span>
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
        {errors.state && (
          <ErrorMessage className="!static">
            {errors.state.message}
          </ErrorMessage>
        )}
      </label>

      <label className="flex col-span-2 flex-col gap-2">
        <span className="font-medium">Cidade</span>
        <Controller
          name="city"
          control={control}
          render={({ field }) => {
            return (
              <Select placeholder="Selecione a cidade" {...field}>
                {cities.map((city, index) => (
                  <SelectItem key={index} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </Select>
            )
          }}
        />
        {errors.city && (
          <ErrorMessage className="!static">{errors.city.message}</ErrorMessage>
        )}
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-medium">Tamanho do coletor</span>
        <Controller
          name="size"
          control={control}
          render={({ field }) => {
            return (
              <Select placeholder="Selecione o tamanho" {...field}>
                {sizes.map((size, index) => (
                  <SelectItem key={index} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </Select>
            )
          }}
        />
        {errors.size && (
          <ErrorMessage className="!static">{errors.size.message}</ErrorMessage>
        )}
      </label>

      <label className="flex flex-col gap-2 col-span-3">
        <span className="font-medium">Edite a categoria</span>
        <CollectionPointCategoryInput />
      </label>
    </>
  )
}

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

const sizes = ['P', 'M', 'G', 'GG']
