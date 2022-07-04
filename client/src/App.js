import React, { useState, useEffect } from 'react'
import './App.css';
import Nav from './Components/Nav'
import Content from './Components/Content'
import Header from './Components/Header'
import Api from './Components/Api'
import MongoAPI from './Components/MongoAPI'

function App() {


  const [archive, setArchive] = useState([]);
 
  //once I have remote access to db, make requests to cloud, but I'm broke
  const articles = JSON.parse(localStorage.getItem("news"))
  
  //store data in state
  useEffect(() => {

      Api()
      .then((response) => {
        localStorage.setItem("news", JSON.stringify(response.data.results))
        return response.data.results
       })

  }, [])

  //store history in database to persist indefinitely
  useEffect(() => {
    setArchive(articles);
    MongoAPI(articles);
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


    const navLinks = Array.from( 
  
      //reduce localStorage array into new set, map "section" as keys in new set.
      articles
      .reduce((news, obj) => {

        //create function that is conditional to keywords and spacings in the future
        switch (obj.section) {
          case `us`: obj.section = "National";
          break;
          case `well`: obj.section = "Wellness";
          break;
          case `your-money`: obj.section = "Money";
          break;
          case `Nyregion`: obj.section = "NY Region";
          break;
          default:;
          break;

        }

        return news.set(obj.section, obj);
  
      }, new Map())
  
      .values()
  
    )



  return (

      <div className="App">


        <Header />
        
        <div className="container flexed">

          <div className="notes columnized border centered">
            <div className="notes-baby-box">
              <h5 style={{textAlign: 'left'}}>NY Times API. Search by subject.{/*-Links do not work.*/} Just some UI fun.</h5>
            </div>
          </div>

          <Nav navLinks={navLinks} archive={archive} setArchive={setArchive}/>
          <Content gridColumnStyling={gridColumnStyling} articles={articles} archive={archive} setArchive={setArchive}/>

        </div>


      </div>
  );
}

export default App;





