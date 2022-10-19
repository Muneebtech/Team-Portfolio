import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white",marginBottom:'20px' }}>
          <DiCssdeck size="3rem"></DiCssdeck>
          <Span >Portfolio</Span>
        </a>
      </Link>
    </Div1> 
    <Div2>
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="/hiring/hireMe">
          <NavLink>HireMe</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="/hiring/team">
          <NavLink>Team</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com" target='_blank'>
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://instagram.com" target='_blank'>
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/" target='_blank'>
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
