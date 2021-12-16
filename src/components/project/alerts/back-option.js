import React from "react";
import styled from "styled-components";
import { Button } from "../../ui/button.styled";

export default function BackOption({ isSelected = false, onSelect, onSubmit }) {
  const shadowColor = isSelected
    ? "0 0 1px 3px hsl(176, 50%, 47%)"
    : "0 0 3px rgba(0, 0, 0, 0.2)";
  return (
    <Item shadowColor={shadowColor} onClick={onSelect}>
      <BackOptionTopContent>
        <input type="radio" checked={isSelected} onChange={() => {}} />
        <div className="header">
          <h3>Bamboo stand</h3>
          <div className="price">Pledge $25 or more</div>
        </div>
        <div className="daysLeft">
          101 <span>left</span>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          facere. Fuga, deleniti? Dicta, explicabo est omnis quibusdam error
          repellendus praesentium facere ipsum. Amet vel harum temporibus!
          Consequuntur impedit veniam totam.
        </p>
      </BackOptionTopContent>
      {isSelected && (
        <BackOptionBottomContent>
          <div className="spacer"></div>
          <section className="content">
            <span>Enter your pledge</span>
            <label htmlFor="price" className="input">
              <span>$</span>
              <input type="number" id="price" />
            </label>
            <Button onClick={onSubmit}>Continue</Button>
          </section>
        </BackOptionBottomContent>
      )}
    </Item>
  );
}

export const Item = styled.div`
  position: relative;
  background-color: white;
  border-radius: 15px;
  box-shadow: ${({ shadowColor }) => shadowColor};
  margin-bottom: 25px;
`;

const BackOptionTopContent = styled.div`
  display: grid;

  grid-template-columns: 4em 1fr 5em;
  /*  grid-template-rows: auto; */

  grid-template-areas:
    "radio title days"
    "radio paragraph  paragraph";

  padding-top: 30px;

  input {
    grid-area: radio;

    align-self: flex-start;
    justify-self: center;
  }

  input[type="radio"]:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  input[type="radio"]:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: hsl(176, 50%, 47%);
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  .header {
    grid-area: "title";

    h3 {
      display: inline-block;
      margin-top: 0;
      margin-bottom: 0;
    }

    .price {
      display: inline;
      margin-left: 20px;

      color: hsl(176, 50%, 47%);
    }
  }

  .daysLeft {
    grid-area: days;

    font-weight: bold;
    font-size: large;
    span {
      font-weight: normal;
      font-size: small;
    }
  }

  p {
    grid-area: paragraph;
  }
`;

const BackOptionBottomContent = styled.section`
  .spacer {
    width: 100%;
    height: 2px;
    background-color: #0002;

    flex-grow: 1;
  }

  .content {
    display: flex;
    padding: 1em;

    align-items: center;

    & > span {
      color: #0007;
      margin-left: 20px;
    }
  }

  .input {
    display: flex;
    align-items: stretch;
    margin-left: auto;
    height: 40px;
    border-radius: 60px;

    box-shadow: 0 0 3px #0007;
    overflow: hidden;

    input {
      outline: none;
      border: none;
      height: 100%;
      width: 60px;

      color: #000;
      font-weight: bold;
    }
    span {
      color: #0007;
      margin: auto 20px;
    }
  }
`;
