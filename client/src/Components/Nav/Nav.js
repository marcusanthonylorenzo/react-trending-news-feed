import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = ({ navLinks, archive, setArchive, saveArticles }) => {


  const filterArchive = (event) => {

    setArchive(saveArticles)

    return archive.filter(item => {
      if (item.section === event){
        setArchive((prev) => [...prev, item])
        return item
      } 
    })
    
  }


  const navLinksMap = () => {
    return navLinks.map( (link, i) => {

      //Isolate first character, capitalize (should I set into state?)
      link.section = link.section[0].toUpperCase() + link.section.slice(1)

      return (

        <div className="nav-link-item itemHover" key={`nav-link-item${i}`}>
          <h5 style={{
            filter: `drop-shadow(5px 3px 5px rgba(30, 30, 30, 0.2))`,
            fontSize: `2.4rem`
         }} onClick={(e)=> {
            let input = e.target.innerText.toLowerCase();
            let sifted = filterArchive(input);
            console.log(sifted)
            setArchive(sifted)
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

              {navLinksMap()}

          </div>
        </div>


      </section>   
    </div>

  )
}

export default Nav