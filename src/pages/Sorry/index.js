import React from 'react'
import { Redirect } from 'dva/router'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import HomeBanner from 'Component/HomeBanner'
import GameBox from 'Component/GameBox'
import CardBox from 'Component/CardBox'
import Btn from 'Component/Btn'
import './style'

function Sorry (props) {
  const { location: { state = {} } } = props
  const list = chunk(state.list, 8)
  return (
    list.length
      ? <div className="pg-sorry">
        <HomeBanner />
        <GameBox>
          <div className="card-container">
            <CardBox
              card_list={list}
            />
            <Btn to="/home">收入囊中</Btn>
          </div>
        </GameBox>
      </div>
      : <Redirect to="/home" />
  )
}
export default Sorry
Sorry.propTypes = {
  info: PropTypes.object,
  dispatch: PropTypes.func
}
