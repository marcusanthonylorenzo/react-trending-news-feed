import React from 'react'
import './App.css';
import Nav from './Components/Nav'
import Content from './Components/Content'
import Header from './Components/Header'
// import { ChakraProvider, ThemeProvider, theme, CSSReset } from '@chakra-ui/react'

function App() {


  // //Pass this down as a template CSS styling
  const gridColumnStyling = {
    display: `flex`,
    flexDirection: 'column',
    margin: `auto`,

    height: `50vh`,
    width: `80vw`,
    backgroundColor: `white`,
    opacity: `99%`,
  }


  return (

      <div className="App">

        <Header />
        
        <div className="container flexed">

          <div className="notes columnized border centered">
            <h5 style={{textAlign: 'left'}}>NY Times API. Search by subject.{/*-Links do not work.*/} Just some UI fun.</h5>
          
          </div>

          <Nav/>
          <Content gridColumnStyling={gridColumnStyling} />

        </div>

      </div>
  );
}

export default App;





