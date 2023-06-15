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
      <button
        className="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-blue-700 dark:text-green-100"
        onClick={handleOpenModal}
      >
        View Profile
      </button>
      <ModalComponent isOpen={isOpen} onClose={handleCloseModal}>
        {modalContent}
      </ModalComponent>
    </>
  );
}
