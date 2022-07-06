import React, { useState, useEffect } from 'react'
import './App.css';
import Nav from './Components/Nav/Nav'
import Content from './Components/Content/Content'
import Header from './Components/Header/Header'
import Api from './Components/Apis/Api'
import MongoAPI from './Components/Apis/MongoAPI'

function App() {


  const [archive, setArchive] = useState([]);
  const [saveArticles, setSaveArticles] = useState([])
 
  //once I have remote access to db, make requests to cloud, but I'm broke
  const articles = JSON.parse(localStorage.getItem("news"))
  

  //store data in state
  useEffect(() => {

      Api.getHome()
      .then((response) => {
        localStorage.setItem("news", JSON.stringify(response.data.results))
        return response.data.results
      })

  }, [])

  //store history in database to persist indefinitely
  useEffect(() => {
    setArchive(articles);
    setSaveArticles(articles);
    MongoAPI(articles);
  }, [])



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
        case `nyregion`: obj.section = "NY Region";
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

          <Nav navLinks={navLinks} archive={archive} setArchive={setArchive}
          articles={articles} saveArticles={saveArticles}/>

          <Content articles={articles}
            archive={archive} setArchive={setArchive}/>
        </div>


      </div>
  );
}

export default App;





