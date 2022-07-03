import { React, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Api from './Api'
// import axios from 'axios'


const Content = (props) => {

  const [searchFilter, setSearchFilter] = useState("");
  const [animate, setAnimate] = useState("");
  const [requestIsCancelled, setRequestIsCancelled] = useState(true)
  const [articles, setArticles] = useState([]);
  const [articlesReset, setArticlesReset] = useState([articles])

  // //handle change to delay onChange to the last character match

  // useEffect(() => localStorage.hasOwnProperty("news")? setArticles(localStorage.getItem("news")) :  localStorage.setItem("news", []), [])

  useEffect(() => {
      Api()
      .then((response) => response.data.results)
      .then(res => setArticles(res)) 
  }, [])

  useEffect(() => localStorage.setItem("news", JSON.stringify(articles)))

  // useEffect(() => {
  //   // let cancelToken = axios.CancelToken.source();
  //   const getArticles = async () => {
  //     try {
  //       const articleList = await Api();
  //       setArticles(articleList);
  //       console.log(articleList, articles)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getArticles();

  // }, [])


  // useEffect(() =>{
  //   console.log(articles);
  //   // setApiResponse(articles);

  //   //request cleanup
  //   if (!requestIsCancelled) {
  //     console.log('done typing')
  //   }
  //   return () => {
  //     setRequestIsCancelled(false);
  //     console.log("still typing", requestIsCancelled);
  //   }
  // }, [articles])


  // const readLocalStorage = () => JSON.parse(localStorage.getItem("news"))
  // const [newsUpdates, setNewsUpdates] = useState(readLocalStorage)
  // useEffect(() => setNewsUpdates(readLocalStorage), [])


  const filterByText = (event) => {
    let target = event.target.value;
    console.log(target)

    const filtered = articles.filter( (artic, i) => {
      console.log(artic, target)
      if (artic.title.includes(target) || artic.section.includes(target) || artic.abstract.includes(target)){
        console.log(artic)
      }
    })
    setSearchFilter(filtered);

    console.log(filtered)

    // let newList = articles.filter((index, i) => {
    //   const indexTheIndex = Object.values({...index})
    //     for (const articleInfo of indexTheIndex) {
    //       console.log(indexTheIndex[i])
    //       if (indexTheIndex.includes(target)){
    //         return index.section
    //       } else {
    //         return;
    //       }
    //     }

    // });
    // setArticlesReset(result)
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
    
    return articles.map( el => {
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

                  <h4>{el.published_date.slice(0, 10)}  at {el.published_date.slice(11, -9)}</h4>
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
        <div className="header-search centered">
          <form className="header-search form border border-inset centered"
            onSubmit={(e) => {
              e.preventDefault()
              console.log("subbed")
            }}>
            <input className="" id="searchbox" type="text"
              placeholder="Search 'arts', 'us', 'politics'..."
              style={{
                fontSize: `20px`,
                width: `80%`,
                height: `98%`,
                margin: `2%`,
                textDecoration: `none`,
                borderStyle: `none`,
                borderRadius: `50px`
            }}
                value={searchFilter.toLowerCase()} onChange={filterByText.bind(this)}
                
            ></input>

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