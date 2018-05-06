import React from 'react'
import PropTypes from 'prop-types'
import IScroll from 'iscroll'
import './style'
export default class ScrollView extends React.Component {
  static defaultProps = {
    ID: 'wrappers'
  }
  constructor (props) {
    super(props)
    this.iscroll = null
  }
  componentDidMount () {
    let wrappers = this.props.ID
    this.iscroll = new IScroll(`#${wrappers}`, {
      mouseWheel: true,
      preventDefault: true
    })
    this.iscroll.refresh()
  }
  componentDidUpdate () {
    this.iscroll.refresh()
  }
  render () {
    const { children, ID, className } = this.props
    return (
      <div id={ID} className={className}>
        <ul className="scroller">
          {children}
        </ul>
      </div>
    )
  }
}
ScrollView.propTypes = {
  ID: PropTypes.string,
  height: PropTypes.number,
  children: PropTypes.object,
  className: PropTypes.string
}
