import React, { useState } from 'react'

const Nav = ({ navLinks, archive, setArchive }) => {

  const [newArchive, setNewArchive] = useState([archive])


  const navLinksMap = () => {
    return navLinks.map( (link, i) => {

      //Isolate first character, capitalize (should I set into state?)
      link.section = link.section[0].toUpperCase() + link.section.slice(1)


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
         }} onClick={()=> {
            console.log(link.section, newArchive, this)
         }}>
          
          
          {link.section}
          
          
          </h5>
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

              { 
                navLinksMap()
              }

          </div>
        </div>

      </section>
      
    </div>

  )
}

export default Nav