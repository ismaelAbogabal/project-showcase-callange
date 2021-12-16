import React from "react";
import styled from "styled-components";
import CheckCircle from "../../icons/check-circle";
import { Button } from "../../ui/button.styled";
import Modal from "../../ui/model";

export default function CongratulationsModel({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <ModelStyles>
        <CheckCircle />
        <h2>Thank you for your support!</h2>
        <p>
          your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campain is
          completed
        </p>
        <Button onClick={onClose}>Got it!</Button>
      </ModelStyles>
    </Modal>
  );
}

const ModelStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 400px;
  svg {
    width: 120px;
    color: hsl(176, 50%, 47%);
  }

  p {
    text-align: center;
    line-height: 1.7;
  }
`;
