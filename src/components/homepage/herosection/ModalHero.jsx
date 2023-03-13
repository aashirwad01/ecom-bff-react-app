import React from "react";
import Button from "../../common/Button";
import ModalComponent from "../../common/Modal";

export const ModalHero = ({ onClose }) => {
  return (
    <ModalComponent>
      modal
      <Button onClick={() => onClose()}>Close</Button>
    </ModalComponent>
  );
};
