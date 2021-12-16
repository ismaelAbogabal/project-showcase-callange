import React from "react";
import styled from "styled-components";
import Container from "../ui/container";
import Header from "../ui/header";

export default function Layout({ children }) {
  return (
    <>
      <BackgroundImage src="/images/image-hero-desktop.jpg" />
      <Header />
      <Container>{children}</Container>
    </>
  );
}

const BackgroundImage = styled.img`
  background-color: blue;
  display: inline-block;
  height: 50%;
  width: 100%;

  position: fixed;
  top: 0;
`;
