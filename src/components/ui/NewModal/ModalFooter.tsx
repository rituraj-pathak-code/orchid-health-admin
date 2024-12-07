import styles from './index.module.css'

const ModalFooter = ({children}) => {
  return (
    <div className={styles.footer}>{children}</div>
  )
}

export default ModalFooter