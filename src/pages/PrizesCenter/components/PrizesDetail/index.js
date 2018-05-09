import React from 'react'
import './style'

const PrizesDetail = ({ detail: {prize = {}, num = 0, activity_time} }) => (
  <div className="cpt-prizes-detail">
    <div className="prize-info">
      <h1>{prize.desc}</h1>
      <p>{num}人已兑换 | 活动时间:{activity_time}</p>
    </div>
    <div className="prize-intro">
      <div className="intro-title">商品介绍</div>
      <div className="intro-content"
        dangerouslySetInnerHTML={{__html: '上市时间: 2018年春季<br/> 品牌: WORLD CUP 2018<br/> 是否商场同款: 是<br/> 颜色分类: 35CM毛绒吉祥物<br/> 周边产品: 毛绒系列<br/> 产品特点：<br/> 毛绒公仔的尾巴填充饱满，立体感强。专业立体剪裁，用心工艺制作，确保每个报备质量。采用涤纶，抱在怀里有弹性，手感舒适，各个部位都均匀暴漫填充，不变形。每个部位，每个细节都做工细腻，形象生动，栩栩如生。毛绒外部采用涤纶面料，手感舒适，有光泽，回弹性好。毛绒公仔衣服上面2018世界杯logo的印花，展现了世界杯的魅力。<br/> 本次活动特别鸣谢XXX赞助。<br/> 奖品与苹果公司无关，最终解释权归懂车帝所有。<br/>'}}
      >
      </div>
    </div>
  </div>
)

export default PrizesDetail
