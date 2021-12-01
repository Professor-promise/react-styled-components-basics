import React from 'react';
import SocialIcons from './SocialIcons';
import { Container } from './styled/Container.styled';
import { Flex } from './styled/Flex.styled';
import { StyledFooter } from './styled/Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />
        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit</li>
            <li>+2349029750484</li>
            <li>professor@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. All Rights Reserved</p>
      </Container>
    </StyledFooter>
  );
}
