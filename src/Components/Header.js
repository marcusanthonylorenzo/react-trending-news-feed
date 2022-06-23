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

  // useEffect(() => {

  //   function weatherWidget(d,s,id) {
  //     var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}

  //   weatherWidget(document,'script','weatherwidget-io-js');

  // })

  return (
  
    <section className="header">
      <div className="header">

        <div className={"header-title"}>
          <h1>Realtime NYC Headlines</h1>
        </div>


        <div className="header-search border-inset centered">
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

        </div>

        <div className="weather">
          {/* <a className="weatherwidget-io" href="https://forecast7.com/en/40d71n74d01/new-york/" dataLabel_1="NEW YORK" dataLabel_2="WEATHER" dataTheme="original" dataBasecolor="rgba(31, 86, 124, 0)" dataTextcolor="#000000" >
            
          <h4>WEATHER WIDGET HERE</h4></a> */}
        </div>


        <div className={"header-stats"}>
          <h4>{getDate}</h4>
          <h2>{getTime}</h2>
        </div>


      </div>
    </section>
  )
}

export default Header