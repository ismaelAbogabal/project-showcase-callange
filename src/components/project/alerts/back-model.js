import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../../icons/close";
import Modal from "../../ui/model";
import BackOption from "./back-option";

export default function BackModal({ onSubmit, onClose }) {
  const [selected, setSelected] = useState(null);

  return (
    <Modal onClose={onClose}>
      <ModalHeader>
        <h3>Back this project</h3>
        <p>
          Want to support us bringing Mastercraft Monitor Riser out in the
          world?
        </p>
        <span className="close" onClick={onClose}>
          <CloseIcon />
        </span>
      </ModalHeader>
      <BackOption
        isSelected={selected === 0}
        onSelect={() => setSelected(0)}
        onSubmit={onSubmit}
      />
      <BackOption
        isSelected={selected === 1}
        onSelect={() => setSelected(1)}
        onSubmit={onSubmit}
      />
    </Modal>
  );
}

const ModalHeader = styled.div`
  position: relative;

  .close {
    position: absolute;
    top: -20px;
    right: 0;

    width: 15px;
    color: #000a;

    cursor: pointer;
  }
`;
