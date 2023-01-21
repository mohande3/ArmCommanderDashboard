import React from "react";

function Modal({
  id = "",
  title,
  children,
  modalFooter,
  onHandleClickConfirm,
  size = "",
}) {
  const HandleClickConfirm = () => {
    if (!onHandleClickConfirm) {
      console.warn(`onHandleClickConfirm not exist in ${id}`);
      return;
    }
    onHandleClickConfirm();
  };
  const GetFooter = () => {
    if (modalFooter) return <div className="modal-footer">{modalFooter}</div>;
    return (
      <div className="modal-footer">
        <>
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            برگشت
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={HandleClickConfirm}
          >
            تایید
          </button>
        </>
      </div>
    );
  };
  return (
    <>
      <div
        className="modal "
        id={id}
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
        data-bs-backdrop="static"
      >
        <div className={`modal-dialog ${size ? "modal-" + size : ""}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            {GetFooter()}
          </div>
        </div>
      </div>
    </>
  );
}

const ModalDelete = ({ id = "", text = "", onHandleClickConfirm }) => {
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
            className="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            برگشت
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={HandleClickConfirm}
          >
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
  content,
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
      className={"btn " + className}
      data-bs-toggle="modal"
      data-bs-target={"#" + modalId}
      onClick={HandleClick}
    >
      {content}
    </button>
  );
};

export default Modal;
export { ModalShowBtn, ModalDelete };
