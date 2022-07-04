import React from 'react'

const Nav = () => {

  //once I have remote access to db, make requests to cloud, but I'm broke
  const getNews = JSON.parse(localStorage.getItem("news"))

  const navLinks = Array.from( 

    //reduce localStorage array into new set, map "section" as keys in new set.
    getNews
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
        default: console.log(obj.section);
        break;
      }
      return news.set(obj.section, obj);

    }, new Map())

    .values()

  )

  console.log(navLinks)

  const navLinksMap = () => {
    return navLinks.map( (link, i) => {

      //Isolate first character, capitalize (should I set into state?)
      link.section = link.section[0].toUpperCase() + link.section.slice(1)
      console.log(link.section, link.section.slice(1))


      return (

        <div className="nav-link-item itemHover" key={i} style={{
          display: 'flex',
          flexDirection: 'column',
          margin: `0 3%`,
          padding: `1%`,
          height: `fit-content`,
          width: `100%`,
          cursor: 'pointer',
          textAlign: 'left'
        }}>
          <h5 style={{
            filter: `drop-shadow(5px 3px 5px rgba(30, 30, 30, 0.2))`,
            fontSize: `2.4rem`
         }}>{link.section}</h5>
        </div>

      )
    })
  }

  return (

    <div className={"navbar border border-inset"}>
          
      <section className="navbar">
       
        <div className="trending-topics">
          <h2>Trending Topics</h2>
        </div>

        <div className="nav-links-wrap">
          <div className="nav-links-items">
            {navLinksMap()}
          </div>
        </div>

      </section>
      
    </div>

  )
}

export default Nav