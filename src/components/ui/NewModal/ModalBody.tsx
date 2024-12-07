import styles from "./index.module.css"

const ModalBody = ({children}) => {
  return (
    <div className={styles.body}>{children}</div>
  )
}

export default ModalBody