import React from "react";
import styled from "styled-components";
import { Card } from "../ui/card";
import RewardSection from "./reward";

export default function ProjectAbout({ showModel }) {
  return (
    <ProjectAboutSection>
      <Card>
        <h2>About This Project</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad
          odio, beatae, natus doloribus corrupti maiores animi numquam saepe
          quam ullam nulla qui sunt? Adipisci, reprehenderit. Voluptatibus
          consequuntur atque a, odit tempora facere consectetur obcaecati autem
          soluta, minus dicta explicabo quas molestias officiis. Aliquam dicta
          saepe eligendi tenetur eos at fugit sit incidunt recusandae voluptas
          quo inventore, blanditiis id alias. Delectus aperiam ex blanditiis ad
          repudiandae explicabo autem reprehenderit architecto?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
          corporis, laudantium aliquid soluta vel laboriosam quasi tempora, est
          unde architecto beatae facilis labore. Ratione impedit magnam voluptas
          inventore aliquid reprehenderit?
        </p>

        <RewardSection showModel={showModel}/>
        <RewardSection showModel={showModel}/>
        <RewardSection outOfStock={true} />
      </Card>
    </ProjectAboutSection>
  );
}

const ProjectAboutSection = styled.section``;
