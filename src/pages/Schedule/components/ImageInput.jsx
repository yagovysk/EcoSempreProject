import * as Tooltip from '@radix-ui/react-tooltip'

import { Icon } from '@iconify/react'
import { useFormContext } from 'react-hook-form'

import { TooltipContent } from '../../../components/TooltipContent'
import { ErrorMessage } from '../../../components/Form/ErrorMessage'
import { useRef } from 'react'

export function ImageInput() {
  const imageLabelRef = useRef(null)

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const files = watch('attachments')

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <label className="relative col-span-full">
          <Tooltip.Trigger
            type="button"
            onKeyDown={(e) =>
              imageLabelRef.current &&
              e.key === 'Enter' &&
              imageLabelRef.current.click()
            }
            className="outline-none border-[1.5px] border-transparent focus:shadow-input focus:border-green-300"
          >
            <label
              htmlFor="images"
              ref={imageLabelRef}
              className="flex items-center gap-3 text-blue font-medium font-roboto cursor-pointer"
            >
              <Icon icon="teenyicons:attach-solid" className="w-6 h-6" />
              Anexar imagens
            </label>
          </Tooltip.Trigger>

          <input
            id="images"
            type="file"
            multiple
            accept="image/.jpeg,.jpg,.png"
            className="hidden"
            {...register('attachments')}
          />

          {errors.attachments && (
            <ErrorMessage className="!static block">
              {errors.attachments.message}
            </ErrorMessage>
          )}

          {files && files.length > 0 && (
            <div className="mt-3 text-blue font-inter text-sm max-h-28 overflow-auto">
              Arquivos selecionados:{' '}
              {Array.from(files).map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
          )}
        </label>

        <TooltipContent
          className="max-w-[16rem]"
          title="Adicione até no máximo 3 imagens dos seus materiais no formato JPEG ou PNG. Tamanho máximo suportado de 5MB para cada imagem."
        />
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
