import * as Dialog from '@radix-ui/react-dialog'
import { Icon } from '@iconify/react'
import { PixInformation } from '../PixInformation'

import { QRCode } from '../../../../assets/imgs/donation'

import styles from './styles.module.css'

export function PixModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay_modal}>
        <Dialog.Content className={`${styles.modal}`}>
          <Dialog.Close className={`${styles.btn_close_modal}`}>
            <Icon icon="ic:round-close" />
          </Dialog.Close>

          <Dialog.Title className={`${styles.title_modal}`}>
            Chave Pix EcoSempre
          </Dialog.Title>

          <Dialog.Description className={`${styles.paragraph_modal}`}>
            Você pode fazer sua doação para a EcoSempre de forma rápida, prática
            e segura através de uma chave Pix. Para fazer sua doação via Pix,
            basta abrir seu aplicativo do banco, acessar a opção Pix e ler o QR
            Code abaixo. Ou se preferir, insira uma das chaves Pix da EcoSempre.
          </Dialog.Description>

          <div className={`${styles.wrapper_pix}`}>
            <div className={`${styles.subtitle_pix}`}>Chave Pix EcoSempre</div>
            <PixInformation
              className={`${styles.pix}`}
              pix="ecosempre@gmail.com"
              label="Email:"
            />

            <PixInformation
              className={`${styles.pix}`}
              pix="99.999.999/0001-99"
              label="CNPJ:"
            />
          </div>

          <hr className={`${styles.line}`} />

          <div className={`${styles.subtitle_pix}`}>QR Code</div>
          <div className={`${styles.qr_code_wrapper}`}>
            <img src={QRCode} alt="QR Code do pix da EcoSempre" />
          </div>
          <p className={`${styles.paragraph} ${styles.paragraph_modal}`}>
            Após realizar seu Pix, envie seu comprovante para o nosso{' '}
            <a href="#" className={styles.whatsapp_link}>
              whatsapp
            </a>
            , para identificarmos a sua doação. Fique tranquilo, todas as
            informações são confidenciais e não serão repassadas a terceiros.
          </p>

          <Dialog.Close className={`btn btn-link ${styles.btn_modal}`}>
            FECHAR
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}
