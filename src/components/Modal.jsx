import classes from "./Modal.module.css";

function Modal({ children, onClick }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClick} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
