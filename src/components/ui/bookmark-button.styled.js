import React from "react";
import styled from "styled-components";

export default function BookmarkButton({ isBookMarked, onChange }) {
  let iconColor = isBookMarked ? "hsl(176, 72%, 28%)" : "#2F2F2F";
  let iconInnerColor = isBookMarked ? "white" : "#B1B1B1";

  return (
    <Cont isBookMarked={isBookMarked} onClick={onChange}>
      <Icon
        src="/images/icon-bookmark.svg"
        innerColor={iconInnerColor}
        outerColor={iconColor}
      />
      <p>{isBookMarked ? "Bookmarked" : "Bookmark"}</p>
    </Cont>
  );
}

const Cont = styled.span`
  display: inline-flex;
  position: relative;

  padding-left: 2rem;
  padding-right: 2rem;

  background-color: ${({ isBookMarked }) =>
    isBookMarked ? "#ddd" : "#B1B1B1"};

  align-items: center;

  height: 56px;

  border-radius: 50px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  p {
    margin-left: 10px;

    color: ${({ isBookMarked }) =>
      isBookMarked ? "hsl(176, 72%, 28%)" : "#2F2F2F"};
    font-weight: bold;
    letter-spacing: 0.3px;
  }

  svg {
    aspect-ratio: 1;

    position: absolute;
    left: 0;
    height: 100%;

    transform: translateX(-50%);
  }
`;

function Icon({ outerColor, innerColor }) {
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle fill={outerColor || "#2F2F2F"} cx="28" cy="28" r="28" />
        <path fill={innerColor || "#B1B1B1"} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}
