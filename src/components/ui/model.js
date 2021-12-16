import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Card } from "./card";

export default function Modal({ children, onClose }) {
  return createPortal(
    <ModalStyled onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()}>{children}</Card>
    </ModalStyled>,
    document.getElementById("modal-root")
  );
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #000a;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    margin: 10px;

    max-height: 80%;
    max-width: 50rem;

    overflow: auto;
  }
`;
