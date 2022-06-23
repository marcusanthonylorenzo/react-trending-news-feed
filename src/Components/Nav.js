import { React, useState, useEffect } from 'react'

const Nav = () => {

  const navLinks = [ "Home", "Local", "National", "Politics", "Entertainment", "Finance", "Technology", "Travel", "Lifestyle", "Sport"]

  const navLinksMap = () => {
    return navLinks.map( link => {
      
      return (

        <div className="nav-link-item centered itemHover" key={link} style={{
          display: 'flex',
          margin: `0 auto`,
          // width: `10%`,
          height: `100%`,
          alignItems: `center`,
          cursor: 'pointer'
        }}>
          <h5 style={{ filter: `drop-shadow(5px 3px 5px rgba(30, 30, 30, 0.2))` }}>{link}</h5>
        </div>

      )
    })
  }

  return (
    <div className={"navbar"}>
      <section className="navbar centered">

        <div className="nav-links-wrap centered">
          <div className="nav-links-items border-inset centered">
            {navLinksMap()}
          </div>
        </div>

      </section>
    </div>
  )
}

export default Nav