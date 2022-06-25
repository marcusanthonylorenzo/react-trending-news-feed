import { React, useState, useEffect } from 'react'

const Header = () => {

  const currentTime = new Date();
  const [getTime, setTime] = useState();
  const [getDate, setDate] = useState(currentTime.toLocaleDateString());

  useEffect(() => {
    setTimeout(() => {
      setTime(currentTime.toLocaleTimeString());
    }, 1000)
  })

  return (
  
    <header className="header">
      <div className="header-inner">

        <div className="header-title" style={{ marginLeft: `2%`}}>
          <h1>Realtime NYC Headlines</h1>
        </div>


        {/* <div className="header-search border-inset centered">
          <input className="" id="searchbox" type="text" placeholder="Search articles" style={{
            fontSize: `20px`,
            width: `80%`,
            margin: `2%`,
            textDecoration: `none`,
            borderStyle: `none`
          }}></input>

          <button className="border centered" type="button" id="search"
            onClick={ () => {
              console.log("clickyboi")
            }
            }>
            o
          </button>

        </div> */}


        <div className={"header-stats"}>
          <h4>{getDate}</h4>
          <h2>{getTime}</h2>
        </div>


      </div>
    </header>
  )
}

export default Header