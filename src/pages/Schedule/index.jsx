import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HeaderSection } from '../../components/HeaderSection'
import { SelectField } from '../../components/SelectField'
import { ScrollReveal } from '../../components/ScrollReveal'
import { Spinner } from '../../components/Loader/Spinner'
import { FormSubmitted } from '../../components/FormSubmitted'
import { useId, useState } from 'react'
import { Icon } from '@iconify/react'
import api from '../../api/posts'

import styles from './Schedule.module.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Programas',
    path: '/agendar',
  },
  {
    name: 'Agende uma Coleta',
  },
]

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

const scheduleSchema = z.object({
  name: z
    .string()
    .nonempty('Obrigatório')
    .min(3, 'Digite um nome válido')
    .trim(),
  email: z
    .string()
    .nonempty('Obrigatório')
    .email('Digite um e-mail válido')
    .trim(),
  phone: z
    .string()
    .nonempty('Obrigatório')
    .min(8, 'Telefone inválido')
    .max(11, 'Telefone inválido'),
  cep: z.coerce
    .number({
      invalid_type_error: 'Deve conter apenas números',
    })
    .min(8, 'CEP inválido'),
  state: z.string().nonempty('Obrigatório'),
  city: z.string().nonempty('Obrigatório'),
  materials: z.string().nonempty('Obrigatório').trim(),
  images: z
    .instanceof(FileList)
    .refine((fileList) => fileList.length <= 3, 'Adicione no máximo 3 imagens')
    .refine((fileList) => {
      for (const file of fileList) {
        return ACCEPTED_IMAGE_TYPES.includes(file.type)
      }
    }, 'Apenas os formatos .jpg, .jpeg e .png são suportados')
    .refine((fileList) => {
      for (const file of fileList) {
        return file.size <= MAX_FILE_SIZE
      }
    }, 'O arquivo precisa ter no máximo 5MB')
    .optional(),
})

const states = ['Acre', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Paraíba']
const cities = [
  'Águia Branca',
  'Atalaia',
  'Arapiraca',
  'Batalha',
  'Belém',
  'Campina Grande',
  'Arapiraca',
  'Batalha',
  'Belém',
  'Campina Grande',
]
const initialValues = {
  name: '',
  email: '',
  phone: '',
  cep: '',
  state: '',
  city: '',
  materials: '',
  images: '',
}

export const Schedule = () => {
  const {
    formState: { isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: initialValues,
  })
  console.log(isSubmitSuccessful)

  if (isSubmitSuccessful) {
    return (
      <article
        className={`container ${styles.container_schedule} ${styles.form_submitted}`}
      >
        <FormSubmitted
          title="Coleta agendada com sucesso!"
          description="Agradecemos o seu contato e retornaremos em breve."
          reset={reset}
        />
      </article>
    )
  }

  return (
    <main>
      <HeaderSection
        title="Agende uma Coleta"
        linksMenu={linksMenu}
        className={styles.header}
      />
      <article className={`container ${styles.container_schedule}`}>
        <section className={`textsContainer ${styles.textsContainer}`}>
          <ScrollReveal origin="bottom">
            <span className={`small-text`}>Coleta de Lixo Eletrônico</span>
          </ScrollReveal>

          <ScrollReveal origin="bottom">
            <section className={`texts`}>
              <h2 className={`title`}>Agende uma Coleta</h2>
              <p className={`${styles.paragraph}`}>
                Agende a retirada gratuita do seu lixo eletrônico. Seu
                computador ou notebook se tornará matéria-prima para a criação
                de novos produtos. Faça a diferença e agende sua coleta agora
                mesmo.
              </p>
            </section>
          </ScrollReveal>
        </section>

        <ScrollReveal origin="bottom">
          <FormSchedule />
        </ScrollReveal>
      </article>
    </main>
  )
}

function FormSchedule() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: initialValues,
  })
  const stateId = useId()
  const cityId = useId()
  const stateErrorId = useId()
  const cityErrorId = useId()
  const materialErrorId = useId()
  const [imagesSelected, setImagesSelected] = useState([])

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms)
    })

  function handleImageUpload(e) {
    const fileArr = []
    if (!errors.images) {
      for (const file of e.target.files) {
        fileArr.push(file)
      }
    }
    setImagesSelected(fileArr)
  }

  async function onSubmit(data) {
    try {
      await sleep(2000)
      await api.post('/contact', data)
    } catch (err) {
      throw new Response('', {
        status: err.response.status,
        statusText: err.response.statusText,
      })
    }
  }

  return (
    <form
      enctype="multipart/form-data"
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.form}`}
    >
      <Field
        type="text"
        name="name"
        label="Nome/Empresa"
        placeholder="Digite seu nome completo ou o nome da sua empresa"
        register={register}
        errors={errors}
      />
      <Field
        type="text"
        name="email"
        label="E-mail"
        placeholder="Digite um endereço de email"
        register={register}
        errors={errors}
      />
      <Field
        type="text"
        name="phone"
        label="Telefone"
        placeholder="Digite um número de telefone"
        register={register}
        errors={errors}
      />
      <Field
        type="text"
        name="cep"
        label="CEP"
        placeholder="00000-000"
        register={register}
        errors={errors}
        ariaLabel="Exemplo de CEP: 00000-000"
      />
      <div
        className={`${styles.wrapper_field} ${errors.state && styles.error}`}
      >
        <label htmlFor={stateId} className={styles.label_input}>
          Estado
        </label>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <SelectField
              name="state"
              options={states}
              label="Selecione o estado"
              field={field}
              setValue={setValue}
              error={errors.state}
              aria-describedby={errors.state && stateErrorId}
              id={stateId}
            />
          )}
        />
        {errors.state && (
          <span
            id={stateErrorId}
            className={`error_message ${styles.error_message}`}
          >
            {errors.state.message}
          </span>
        )}
      </div>

      <div className={`${styles.wrapper_field} ${errors.city && styles.error}`}>
        <label htmlFor={cityId} className={styles.label_input}>
          Cidade
        </label>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <SelectField
              name="city"
              id={cityId}
              options={cities}
              label="Selecione a cidade"
              field={field}
              setValue={setValue}
              error={errors.city}
              aria-describedby={errors.city && cityErrorId}
            />
          )}
        />
        {errors.city && (
          <span
            id={cityErrorId}
            className={`error_message ${styles.error_message}`}
          >
            {errors.city.message}
          </span>
        )}
      </div>

      <div
        className={`${styles.wrapper_field} ${styles.wrapper_textarea} ${
          errors.materials && styles.error
        }`}
      >
        <label htmlFor="materials" className={`${styles.label_input}`}>
          Quantidade e materiais que deseja descartar
        </label>
        <textarea
          {...register('materials')}
          id="materials"
          placeholder="Seja específico, informe os materiais e sua quantidade exata"
          className={`${styles.input} ${styles.textarea} ${
            errors.materials && 'shake_input'
          }`}
          aria-describedby={errors.materials && materialErrorId}
        ></textarea>
        {errors.materials && (
          <span
            id={materialErrorId}
            className={`error_message ${styles.error_message}`}
          >
            {errors.materials.message}
          </span>
        )}
      </div>

      <div className={`${errors.images && styles.error_image}`}>
        <label className={styles.wrapper_container_field_image}>
          <input
            className={styles.input_image}
            type="file"
            accept=".jpg,.jpeg,.png"
            multiple
            max={3}
            {...register('images', {
              onChange: handleImageUpload,
            })}
          />
          <div className={`${styles.wrapper_field_image}`}>
            <Icon icon="teenyicons:attach-solid" />
            <span className={styles.input_image_text}>Anexar imagens</span>
            <div className={styles.container_images_select} title={imagesSelected.map(image => image.name).join(", ")}>
              {imagesSelected.length > 0 &&
                imagesSelected.map(
                  (image) => `${image.name}`
                )}
            </div>
          </div>
        </label>

        {errors.images && (
          <span className={`error_message ${styles.error_message}`}>
            {errors.images.message}
          </span>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className={`btn ${styles.btn} ${isSubmitting && styles.submitting}`}
      >
        {isSubmitting ? <Spinner /> : 'Agendar Coleta'}
      </button>
    </form>
  )
}

function Field({
  type,
  name,
  label,
  placeholder,
  ariaLabel,
  register,
  errors,
}) {
  const errorId = useId()
  return (
    <div
      className={`${styles.wrapper_field} ${styles[name]} ${
        errors[name] && styles.error
      }`}
    >
      <label htmlFor={name} className={`${styles.label_input}`}>
        {label}
      </label>

      <input
        type={type}
        id={name}
        className={`${styles.input} ${errors[name] && 'shake_input'}`}
        {...register(name)}
        placeholder={placeholder}
        aria-label={!ariaLabel ? placeholder : ariaLabel}
        aria-labelledby={errors[name] && errorId}
      />

      {errors[name] && (
        <span id={errorId} className={`error_message ${styles.error_message}`}>
          {errors[name].message}
        </span>
      )}
    </div>
  )
}
