/* eslint-disable */
import React from 'react'
import './style'

const noop = () => {}
function Navbar ({navbar}) {
  return (
    <div className="navbar">
      <img className="logo" src={require('./images/logo@3x.png')} />
      <ul>
        {
          Object.keys(navbar).map(i => {
            const item = navbar[i]
            const href = item.to ? item.to : 'javascript:;'
            const onClick = item.onClick ? item.onClick : noop
            return (
              <li key={i}><a onClick={onClick} href={href}>{i}</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}

const defaultNavbar = {
  '奖品中心': {
    to: '/prizes/',
  },
  '我的奖品': {
    to: '#/awards'
  }
}
export default function HomeBanner ({navbar = defaultNavbar}) {
  return (
    <div className="cpt-home-banner">
      <Navbar navbar={ navbar } />
    </div>
  )
}
