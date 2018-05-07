import React from 'react'
import PropTypes from 'prop-types'
import './style'

const ReceiveCard = ({list = []}) => (
  <ul className="cpt-receive-card">
    {
      list.map((item, index) => (
        <li className={`card ${index % 2 ? 'gold' : ''}`} key={index}>
          <img src={item.bgimg} />
        </li>
      ))
    }
  </ul>
)

ReceiveCard.propTypes = {
  list: PropTypes.array
}

export default ReceiveCard
