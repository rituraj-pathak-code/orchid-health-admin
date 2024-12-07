import styles from "./index.module.css";

const ModalHeader = ({ onClose, children }) => {
  return (
    <div className={styles.header}>
      {children}

      <button className={styles.close} onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default ModalHeader;
