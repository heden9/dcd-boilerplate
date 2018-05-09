import React from 'react'
import PropTypes from 'prop-types'
import PrizeShare from '../../pages/PrizeShare'
import './style'

function Main ({ history, app }) {
  return <PrizeShare />
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}
export default Main
