import React from "react";

function Modal() {
  return (
    <>
      <div
        class="modal fade show"
        id="basicModal"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
        //   style={{ "display: block;"}}
        style={{ display: "block;" }}
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel1">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
