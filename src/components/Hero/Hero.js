import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Tech Environment
      </SectionTitle>
      <SectionText>I am a Full Stack Developer, Helping people build their dream websites. From frontend designing to backend Api's, providing you an fast performing and scalable websites. </SectionText>
      <Button onClick={()=> window.location = "https://bootcamp.learn.utoronto.ca/blog/what-is-a-full-stack-developer/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
