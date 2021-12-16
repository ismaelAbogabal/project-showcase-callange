import React from "react";
import styled from "styled-components";
import { Row } from "../layout/row.styled";
import { Button } from "../ui/button.styled";
import { Card } from "../ui/card";

export default function RewardSection({ outOfStock, showModel }) {
  return (
    <Card>
      <Row>
        <h3>Bamboo stand</h3>
        <GreenP>pledge $25 or more</GreenP>
      </Row>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod illum
        dolores autem doloremque, consequuntur voluptates soluta rerum numquam
        nostrum quasi quas est, iste fugiat voluptatem eveniet cumque, ab
        tempore!
      </p>

      <Row>
        <DaysLeft>
          64<span>left</span>
        </DaysLeft>
        <Button onClick={showModel}>
          {outOfStock ? "Out Of Stock" : "Select Reward"}
        </Button>
      </Row>

      {outOfStock && <FilterWidget />}
    </Card>
  );
}

const GreenP = styled.span`
  color: hsl(176, 50%, 47%);
`;

const DaysLeft = styled.div`
  font-size: 30px;
  display: inline-flex;
  align-items: center;
  font-weight: bold;

  span {
    font-size: 14px;
    font-weight: normal;
    margin-left: 5px;
    color: #aaa;
  }
`;

const FilterWidget = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #fff9;
  mix-blend-mode: lighten;
`;
