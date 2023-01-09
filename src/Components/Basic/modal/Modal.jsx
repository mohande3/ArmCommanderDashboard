import React from "react";

function Modal({ id = "", title, children, modalFooter }) {
  return (
    <>
      <div
        class="modal "
        id={id}
        tabindex="-1"
        aria-modal="true"
        role="dialog"
        data-bs-backdrop="static"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel1">
                {title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{children}</div>
            <div class="modal-footer">{modalFooter}</div>
          </div>
        </div>
      </div>
    </>
  );
}

const ModalDelete = ({ id = "", text='', onHandleClickConfirm }) => {
  const HandleClickConfirm = () => {
    if (onHandleClickConfirm === undefined || onHandleClickConfirm === null) {
      console.warn(`onHandleClickConfirm not exist in ${id}`);
      return;
    }
    onHandleClickConfirm();
  };
  return (
    <Modal
      title="اطلاعات"
      id={id}
      modalFooter={
        <>
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            برگشت
          </button>
          <button type="button" class="btn btn-danger" onClick={HandleClickConfirm}>
            تایید
          </button>
        </>
      }
    >
      <strong className="text-danger">{text}</strong>
    </Modal>
  );
};

const ModalShowBtn = ({
  id = "",
  modalId = "",
  text = "",
  className = "",
  onHandleClick,
}) => {
  const HandleClick = () => {
    if (onHandleClick === undefined || onHandleClick === null) {
      console.warn(`There is not exist onHandleClick for ${id}`);
      return;
    }
    onHandleClick();
  };
  return (
    <button
      type="button"
      id={id}
      class={"btn " + className}
      data-bs-toggle="modal"
      data-bs-target={"#" + modalId}
      onClick={HandleClick}
    >
      {text}
    </button>
  );
};

export default Modal;
export { ModalShowBtn,ModalDelete };
