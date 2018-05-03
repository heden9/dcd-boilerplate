import React from 'react'
import './style'

const navbar = {
  '奖品中心': '',
  '我的奖品': ''
}
function Navbar () {
  return (
    <div className="navbar">
      <img className="logo" src={require('./images/logo@3x.png')} />
      <ul>
        {
          Object.keys(navbar).map(item => (
            <li key={item}><a href={navbar[item]}>{item}</a></li>
          ))
        }
      </ul>
    </div>
  )
}
export default function HomeBanner () {
  return (
    <div className="cpt-home-banner">
      <Navbar/>

    </div>
  )
}
