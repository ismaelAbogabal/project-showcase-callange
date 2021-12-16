import React from "react";
import styled from "styled-components";
import { Card } from "../ui/card";

export default function ProjectProgress() {
  return (
    <Card>
      <Grid>
        <div className="item">
          <h2>$89,914</h2>
          <p>of $100,000 backed</p>
        </div>
        <span className="spacer"></span>
        <div className="item">
          <h2>5,007</h2>
          <p>total backers</p>
        </div>
        <span className="spacer"></span>
        <div className="item">
          <h2>56</h2>
          <p>days left</p>
        </div>
      </Grid>

      <Progress>
        <div className="prog"></div>
      </Progress>
    </Card>
  );
}

const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 5px 1fr 5px 1fr;
  width: 100%;
  margin: 10px 0;

  h2 {
    font-size: 32px;
    margin: 0;
  }
  p {
    color: hsl(0, 0%, 48%);
    margin-top: 10px;
  }

  .item {
    text-align: center;
  }

  .spacer {
    width: 1px;
    margin: 20px 0;

    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Progress = styled.div`
  height: 17px;
  /* width: 100%; */
  margin: 20px 60px;
  background-color: #f1f1f1;
  border-radius: 20px;

  div {
    border-radius: 20px;
    width: 80%;
    height: 100%;
    background-color: hsl(176, 50%, 47%);
  }
`;
