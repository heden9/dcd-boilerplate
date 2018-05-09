import React from 'react'
import Mask from 'Component/Mask'
import PropTypes from 'prop-types'
import Btn from 'Component/Btn'
import './style'
export default function AwardMask ({ open, award, user_id }) {
  return (
    open
      ? <Mask closeBtn>
        <div className="cpt-award-mask">
          <div className="title">
            <div>恭喜你获得了</div>
            <h1>{award.prize_name}</h1>
          </div>
          <div className="award-box">
            <img src={award.prize_info.bgimg_transparent}/>
            <div className="bk-light"></div>
          </div>
          <Btn onClick={() => {
            window.location.href = `?prize_no=${award.prize_no}&user_id=${user_id}`
          }}>立即兑换</Btn>
          <div>请在1个小时内填写兑换信息，逾期未填写视为弃奖</div>
        </div>
      </Mask>
      : null
  )
}

AwardMask.propTypes = {
  open: PropTypes.bool
}
