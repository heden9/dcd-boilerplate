import React from 'react'
import Mask from 'Component/Mask'
import PropTypes from 'prop-types'
import Btn from 'Component/Btn'
import './style'
export default function AwardMask ({ open, award }) {
  return (
    open
      ? <Mask closeBtn>
        <div className="cpt-award-mask">
          <div className="title">
            <div>恭喜你获得了</div>
            <h1>吉祥物扎比瓦卡</h1>
          </div>
          <div className="award-box">
            <img src={award.prize_info.bgimg_transparent}/>
            <div className="bk-light"></div>
          </div>
          <Btn to="/lottery">立即兑换</Btn>
          <div>请在1个小时内填写兑换信息，逾期未填写视为弃奖</div>
        </div>
      </Mask>
      : null
  )
}

AwardMask.propTypes = {
  open: PropTypes.bool
}
