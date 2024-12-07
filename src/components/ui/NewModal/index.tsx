import styles from "./index.module.css";
import ModalBody from "./ModalBody"
import ModalHeader from "./ModalHeader"
import ModalFooter from "./ModalFooter"

const NewModal = ({
  open,
  size = "normal",
  onClose,
  disableCloseOnOverlayClick,
  children,
}) => {
  const overlayHandler = () => {
    if (!disableCloseOnOverlayClick) {
      onClose();
    }
  };
  if (open) {
    return (
      <>
        <div className={styles.overlay} onClick={overlayHandler}></div>
        <div className={`${styles.modal} ${styles[`modal${size}`]}`}>
          {children}
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
export default NewModal;
export  {ModalHeader, ModalBody, ModalFooter};
