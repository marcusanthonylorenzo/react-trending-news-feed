import { React, useState, useEffect } from 'react'

const Nav = () => {

  const navLinks = [ "Home", "Local", "National", "Politics", "Entertainment", "Finance", "Technology", "Lifestyle", "Sport"]

  const navLinksMap = () => {
    return navLinks.map( link => {
      
      return (

        <div className="nav-link-item centered itemHover" key={link} style={{
          display: 'flex',
          margin: `0 3%`,
          padding: `1%`,
          height: `100%`,
          width: `10%`,
          cursor: 'pointer'
        }}>
          <h5 style={{ filter: `drop-shadow(5px 3px 5px rgba(30, 30, 30, 0.2))` }}>{link}</h5>
        </div>

      )
    })
  }

  return (
    <div className={"navbar border-inset"}>
      <section className="navbar centered">

        <div className="nav-links-wrap centered">
          <div className="nav-links-items centered">
            {navLinksMap()}
          </div>
        </div>

      </section>
    </div>
  )
}

export default Nav