import './App.css';
import Nav from './Components/Nav'
import Content from './Components/Content'
import Header from './Components/Header'
// import { ChakraProvider, ThemeProvider, theme, CSSReset } from '@chakra-ui/react'

function App() {


  //Pass this down as a template CSS styling
  const gridColumnStyling = {
    display: "grid",
    gridTemplateColumns: `1fr`,
    height: `80vh`,
    width: `80vw`,
    backgroundColor: `white`,
    opacity: `99%`,
    margin: `0`,
  }


  return (

      <div className="App">

        <Header />
        
        <div className="container centered">
          
          <Nav />
          <Content gridColumnStyling={gridColumnStyling} />

        </div>

      </div>
  );
}

export default App;
