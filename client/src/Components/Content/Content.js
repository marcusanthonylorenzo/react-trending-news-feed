import { React, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Content.css'

const Content = ({ gridColumnStyling, articles, archive, setArchive }) => {


  // const [searchFilter, setSearchFilter] = useState([]);
  const [animate, setAnimate] = useState("");
  // const [containArticles, setContainArticles] = useState(archive)


  useEffect(() => {
    setArchive(articles)
  }, [])


  //filtering functions
  const filterByText = (event) => {
    let target = event.target.value;
    console.log(target)

    const filtered = archive.filter( (artic, i) => {
      if (artic.title.includes(target) || artic.section.includes(target) || artic.abstract.includes(target)){
        console.log(artic)
      }
    })
  }


  const addAnimate = (type) => {
    setAnimate(type);
  }



  const mapNews = () => {
    
    return archive.map( el => {
      return (

          <div key={uuidv4()}
            className={`content-news ${animate}`}
            onMouseEnter={()=> addAnimate("scale-left")}>

              
            <div className="inner-content">
              <div className="img-wrap">

                <div className="img-wrap-title">
                  <h2>{el.title}</h2>
                  <h4>{el.published_date.slice(0, 10)}  at {el.published_date.slice(11, -9)}</h4>
                </div>

                <div className="">
                  <img className="border"
                    src={ el.multimedia !== null ? `${el.multimedia[1].url}` : ``}
                    alt="mediaIndex.caption"/>                  
                </div>

              </div>
            </div> 

            
          </div> 
      )
    })
  }


  return (
    <div className={`content-area centered`} style={gridColumnStyling}>


      <div id="main-title">
        <div className="header-search centered">


          <form className="header-search form border border-inset centered"
            onSubmit={(e) => {
              e.preventDefault()
            }}>
            <input className="" id="searchbox" type="text"
              placeholder="Search articles"
              onChange={filterByText.bind(this)} 
            ></input>

            <button className="border centered" type="button" id="search"
              onClick={ () => console.log("clickyboi")}>o</button>
          </form>


        </div>
      </div>

      <div className={`filter-news`}>
              { mapNews()}  
      </div>


    </div>
  )
}

export default Content