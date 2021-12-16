import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  background-color: white;
  border-radius: 15px;
  padding: ${({noPadding = false}) => noPadding ? '0' : '30px'};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
`;
