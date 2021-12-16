import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Row } from "../layout/row.styled";
import BookmarkButton from "../ui/bookmark-button.styled";
import { Button } from "../ui/button.styled";
import { Card } from "../ui/card";
import Modal from "../ui/model";
import { Title } from "../ui/title.styled";

export default function ProjectDetails({ showModel }) {
  const [bookmarked, setBookmarked] = useState(true);

  return (
    <Fragment>
      <Card>
        <Logo src="/images/logo-mastercraft.svg" />
        <Title>Master craft Bamboo Monitor Riser</Title>
        <Paragraph>
          A beautiful & handcrafted monitor stands to reduce neck and eye strain
        </Paragraph>

        <Row>
          <Button onClick={showModel}>Back this project</Button>
          <BookmarkButton
            isBookMarked={bookmarked}
            onChange={() => setBookmarked(!bookmarked)}
          />
        </Row>
      </Card>
    </Fragment>
  );
}

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;

  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%) translateX(-50%);
`;

const Paragraph = styled.p`
  text-align: center;
`;
