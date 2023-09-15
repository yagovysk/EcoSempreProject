import styles from './Spinner.module.css'

export function Spinner(props) {
  return (
    <span {...props} className={`${styles.spinner} ${props.className}`}></span>
  )
}
