// src/components/globalModal/GlobalModal.js

import React from "react";
import { useModal } from "../../../contexts/modalContext/ModalContext";
import BaseModal from "../BaseModal/BaseModal";


const GlobalModal = () => {
  const { modalContent, closeModal } = useModal();

  if (!modalContent) return null;

   return React.cloneElement(modalContent, { onClose: closeModal })
};

export default GlobalModal;