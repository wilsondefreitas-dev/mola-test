import React from 'react';
import './App.css';
import styled from 'styled-components';
import logo from './logo.png';

const RootContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #eef5fb;
  height: 100vh;
  width: 100vw;

`;

const Header = styled.div`

  background-color: white;
  height: 80px;
  width: 100%;
  padding: 0.8rem;

  img{

    height: 100%;

  }

`;

const Main = styled.div`

  height: 800px;
  width: 1024px;
  background-color: white;
  box-shadow: 0px 8px 50px 0px rgb(0 0 0 / 8%);
  border-radius: 32px;
  margin: 4rem;

  @media (max-width: 1024px) {

    width: 90%;

  }

`;

const Footer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161939;
  height: 80px;
  width: 100vw;
  color: white;

  b{

    color: #db2e65;

  }

`;

function App() {
  return (
    <RootContainer>

    <Header>

    <img src={logo} alt="Mola" />

    </Header>

    <Main/>

    <Footer>
      /by.<b>wilsondef</b>
    </Footer>

    </RootContainer>
  );
}

export default App;