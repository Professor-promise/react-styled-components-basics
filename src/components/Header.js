import React from 'react';
import { StyledHeader, Nav, Logo, Image } from './styled/Header.styled';
import { Container } from './styled/Container.styled';
import { Button } from './styled/Button.styled';
import { Flex } from './styled/Flex.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>Try it for Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the Community Your Fans will love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              doloremque ducimus id reprehenderit. Ullam consectetur harum quasi
              quas, laudantium commodi.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get Started for Free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
