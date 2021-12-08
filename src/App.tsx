import styled from 'styled-components';
import logo from './logo.png';
import { Routes, Route } from "react-router-dom";
import Table from './componentes/Table';
import Details from './componentes/Details';

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

  a{

    text-decoration: none;
    color: #db2e65;
    font-weight: bold;

  }

  a:hover{

    color: #dd93aa;

  }

`;

function App() {
  return (
    
    <RootContainer>

      <Header>

        <a target="_blank" rel="noreferrer" href="https://molacorban.com.br/">
          <img src={logo} alt="Mola" />
        </a>

      </Header>


      <Main>

        <Routes>

          <Route path="/" element={<Table/>} />
          <Route path="details" element={<Details/>}/>

        </Routes>

      </Main>


      <Footer> 

        /by.<a target="_blank" rel="noreferrer" href="https://github.com/wilsondefreitas-dev">wilsondef</a> 
        
      </Footer>

    </RootContainer>
  );
}

export default App;