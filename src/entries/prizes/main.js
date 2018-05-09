import React from 'react'
import PropTypes from 'prop-types'
import PrizesCenter from '../../pages/PrizesCenter'
import './style'

function Main ({ history, app }) {
  return <PrizesCenter />
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}
export default Main
