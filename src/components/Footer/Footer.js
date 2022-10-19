import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+92-311-1410909">+92-311-1410909</LinkItem>
        <LinkItem href="tel:+92-322-7547116">+92-322-7547116</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:ranamuneebtahir@gmail.com">
          ranamuneebtahir@gmail.com
        </LinkItem>
        <LinkItem href="mailto:khubaib@gmail.com">
          h.khubaib07@gmail.com
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com" target='_blank'>
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://instagram.com" target='_blank'>
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com" target='_blank'>
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
