import React from "react";
import { DiAws, DiDatabase, DiFirebase, DiNodejs, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Design. Deploying sites on AWS, Aapanel & Cpanel.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph />
          Experiencw with <br />
          React.js & Next.js
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph />
          Experiencw with <br />
          Node.js, MongoDb & Express.js
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAws size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Computing</ListTitle>
          <ListParagraph />
          Experiencw with <br />
          AWS
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;