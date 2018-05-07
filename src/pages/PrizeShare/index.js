import React from 'react'
import Btn from 'Component/Btn'
import Header from './components/Header'
import Prize from './components/Prize'
import './style'

class PrizeShare extends React.Component {
  render () {
    return (
      <div className="page-prize-share">
        <Header title="信息提交成功" />
        <div className="prize-wrap">
          <Prize rank={120} award={{name: '懂车帝棒球帽'}} />
          <Btn onClick={() => {}}>炫耀一下</Btn>
        </div>
      </div>
    )
  }
}

export default PrizeShare
