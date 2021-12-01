import { ThemeProvider } from 'styled-components';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { Container } from './components/styled/Container.styled';
import GlobalStyles from './components/styled/Global';
import content from './content';

const theme = {
  colors: {
    header: '#eee',
    body: '#fff',
    footer: '#003333',
    color: '#fff',
  },
  mobile: '768px',
};
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header />
          <Container>
            {content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </Container>
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}
