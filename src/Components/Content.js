import { React, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Api from './Api'


const Content = (props) => {

  //fetch API on mount
  useEffect(() => Api() )

  const readLocalStorage = () => {
    return JSON.parse(localStorage.getItem("news"));
  }

  const [details, setDetails] = useState();

  const showDetails = (el) => {
      return (
      <div className="content-header-details">
        <h4>Topic: <span id={`content-section`}>{el.section}</span></h4>
        <h4>{el.byline}</h4>
      </div>)
  }

  //Feed Card Structure
  const mapNews = () => {
    const getNews = readLocalStorage();

    return getNews.map( (el) => {

      return (

          <div key={uuidv4()} className="content-news" style={{ display: `flex`}}>
        
            <div className="inner-content" style={{
              display: `flex`,
              height: `100%`,
              width: `100%`,
              // backgroundImage: `url(${el.multimedia[1].url})`,
              // backgroundSize: `no repeat`,
              opacity: `95%`
            }}>
              <div className="img-wrap">
                <div className="img-wrap-title" style={{
                  display: `flex`,
                  flexDirection: `column`,
                  position: `absolute`,
                  margin: `0 auto`,
                  width: `50%`
                }}>

                  <h2>{el.title}</h2>
                  {showDetails}


              <h4>{el.published_date.slice(0, 10)}, {el.published_date.slice(11, -9)}</h4>
                </div>
                <div className="">
                   <img className="border" src={`${el.multimedia[1].url}`} alt="mediaIndex.caption"/>                  
                </div>

              </div>
            </div> 

          </div> 
      )
    })
  }

  return (
    <div className={`content-area centered`} style={props.gridColumnStyling}>

      <div id="main-title"><h2>Trending Topics</h2></div>
      <div className={`filter-news`}>
          {mapNews()}
      </div>

    </div>
  )
}

export default Content