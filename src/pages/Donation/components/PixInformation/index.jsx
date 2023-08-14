import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { TooltipContent } from '../../../../components/TooltipContent'

import * as Tooltip from '@radix-ui/react-tooltip'

import styles from './styles.module.css'

export const PixInformation = ({ label, pix }) => {
  const [pixCopied, setPixCopied] = useState(false)
  const pixRef = useRef(null)

  const handleCopyToClipboard = (e) => {
    if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
      navigator.clipboard.writeText(pixRef.current.innerHTML)
      setPixCopied(true)
    }
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <div className={styles.wrapper_pix_information}>
          <p>
            <span className={`${styles.pix_label}`}>{label}</span>{' '}
            <span ref={pixRef} className={`${styles.pix}`}>
              {pix}
            </span>
          </p>

          <Tooltip.Trigger
            className={styles.btn_clipboard}
            aria-label={
              !pixCopied
                ? 'Clique aqui para copiar a chave pix'
                : 'Chave pix copiada com sucesso'
            }
            onClick={handleCopyToClipboard}
            onKeyDown={handleCopyToClipboard}
          >
            <Icon icon="lucide:copy" className={styles.icon_clipboard} />
          </Tooltip.Trigger>
        </div>

        <TooltipContent
          title={!pixCopied ? 'Copiar chave pix' : 'Chave pix copiada!'}
        />
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
