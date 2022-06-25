import { React, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Api from './Api'


const Content = (props) => {

  useEffect(() => Api() )
  const readLocalStorage = () => JSON.parse(localStorage.getItem("news"))

  const [searchFilter, setSearchFilter] = useState("");
  const [newsUpdates, setNewsUpdates] = useState(readLocalStorage)
  const [animate, setAnimate] = useState("");

  useEffect(() => setNewsUpdates(readLocalStorage), [])


  const filterByText = (event) => {
    let target = event.target.value;
    setSearchFilter(target);

    const checkStorage = readLocalStorage();
    let newList = checkStorage.filter(index => {
      if (index.section === target){
        return index.section
      } else {
        return;
      }
    });
    setNewsUpdates(newList)
  }


  const addAnimate = (type) => {
    setAnimate(type);
  }

  // const showDetails = (el) => {
  //     return (
  //     <div className="content-header-details">
  //       <h4>Topic: <span id={`content-section`}>{el.section}</span></h4>
  //       <h4>{el.byline}</h4>
  //     </div>)
  // }


  const mapNews = () => {
    const getNews = newsUpdates;
    
    return getNews.map( el => {
      return (
          <div key={uuidv4()}
            className={`content-news ${animate}`}
            style={{ display: `flex`}}
            onMouseEnter={()=> addAnimate("scale-left")}>
            <div className="inner-content" style={{
              display: `flex`,
              height: `100%`,
              width: `100%`,
              opacity: `95%`
            }}>
              <div className="img-wrap">
                <div className="img-wrap-title" style={{
                  display: `flex`,
                  flexDirection: `column`,
                  position: `absolute`,
                  margin: `0 auto`,
                  width: `50%`,
                }}>


                  <h2>{el.title}</h2>
                  {/* {showDetails} */}

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

      <div id="main-title">
        <div className="header-search">
          <form className="header-search form border-inset centered"
            onSubmit={(e) => {
              e.preventDefault()
              console.log("subbed")
            }}>
            <input className="" id="searchbox" type="text" placeholder="Search articles" style={{
              fontSize: `20px`,
              width: `80%`,
              margin: `2%`,
              textDecoration: `none`,
              borderStyle: `none`
            }} value={searchFilter} onChange={filterByText.bind(this)} ></input>

            <button className="border centered" type="button" id="search"
              onClick={ () => console.log("clickyboi")}>o</button>

          </form>
        </div>

        <div className="trending-topics">
          <h2>Trending Topics</h2>
        </div>
      </div>

      <div className={`filter-news`}>
          {mapNews()}
      </div>

    </div>
  )
}

export default Content