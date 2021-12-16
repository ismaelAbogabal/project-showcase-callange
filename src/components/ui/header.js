import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [showBackground, setShowBackGround] = useState(false);

  useEffect(() => {
    let scrollHandler = (e) => {
      if (window.scrollY > 0.2 * window.innerHeight) {
        if (!showBackground) setShowBackGround(true);
      } else {
        if (showBackground) setShowBackGround(false);
      }
    };

    window.removeEventListener("scroll", scrollHandler);
    window.addEventListener("scroll", scrollHandler);
  }, [showBackground]);

  return (
    <StyledHeader showBackground={showBackground}>
      <Logo src="/images/logo.svg" />

      <Nav>
        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </Nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  padding: 30px 5%;

  position: sticky;
  top: 0;

  z-index: 10;
  transition: all 0.5s;
  background-color: ${({ showBackground }) =>
    showBackground ? "#000c" : "unset"};
`;

const Logo = styled.img``;

const Nav = styled.nav`
  float: right;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;

      color: white;
      margin: 0 10px;

      text-decoration: none;
    }
  }
`;
