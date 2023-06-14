import React, { useState } from "react";
import ModalComponent from "./modalContent";

export default function ButtonWithModal({ modalContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="text-blue-500" onClick={handleOpenModal}>
        Pay
      </button>
      <ModalComponent isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </ModalComponent>
    </>
  );
}
