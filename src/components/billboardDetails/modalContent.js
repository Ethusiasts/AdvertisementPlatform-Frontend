import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.5rem",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: 1000,
  },
};

export default function ModalComponent({ isOpen, onClose, children }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="modal">
        <div class="modal-header flex justify-between items-center">
          <div></div>
          <button
            class="modal-close text-gray-500 hover:text-gray-700 font-bold text-xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div class="modal-body p-4 w-5/10">{children}</div>
      </div>
    </Modal>
  );
}
