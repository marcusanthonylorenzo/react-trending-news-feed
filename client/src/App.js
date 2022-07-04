import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Nav from './Components/Nav'
import Content from './Components/Content'
import Header from './Components/Header'
// import { ChakraProvider, ThemeProvider, theme, CSSReset } from '@chakra-ui/react'

function App() {

  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get('http://localhost:3002/getUsers')
      .then (response => {
        console.log(response)
        setUsers(response)
      });

  }, [])

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
            <div className="notes-baby-box">
              <h5 style={{textAlign: 'left'}}>NY Times API. Search by subject.{/*-Links do not work.*/} Just some UI fun.</h5>
            </div>
          
          </div>

          <Nav/>
          <Content gridColumnStyling={gridColumnStyling} />

        </div>

      </div>
  );
}

export default App;




