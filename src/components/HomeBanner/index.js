/* eslint-disable */
import React from 'react'
import './style'

const defaultNavbar = {
  '奖品中心': '/prizes/',
  '我的奖品': '#/myprizes'
}
function Navbar ({navbar}) {
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
export default function HomeBanner ({navbar = defaultNavbar}) {
  return (
    <div className="cpt-home-banner">
      <Navbar navbar={ navbar } />
    </div>
  )
}
