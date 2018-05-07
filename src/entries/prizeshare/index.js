import React from 'react'
import PropTypes from 'prop-types'
import { AppRegistry } from '../common'
import PrizeShare from '../../pages/PrizeShare'
import './style'

function Main ({ history, app }) {
  return <PrizeShare />
}

Main.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
}

AppRegistry({
  gModels: [],
  main: Main
}, __dirname)
