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
      <LinkItem href="tel:+918605181750">+918605181750</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:rushikeshnarwade53@gmail.com">rushikeshnarwade53@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Lightning up the future together!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/rushikeshnarwade">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/rushikesh-narwade-4845a7171">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://instagram.com/rushikeshnarwade">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
