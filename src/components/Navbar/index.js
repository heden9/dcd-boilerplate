import React from 'react'
import { getData } from '../../services/api_user'
import { createFetcher, Loading } from '../../utils/future'
const fetch = createFetcher(getData)

const FangZheng = () => {
  return <h1>{fetch()}!</h1>
}

export default class App extends React.Component {
    state = {
      show: false
    }

    handleClick = () => {
      this.setState({
        show: true
      })
    }

    handleClickBack = () => {
      this.setState({
        show: false
      })
    }
    handleClickClear = () => {
      location.reload()
    }

    render () {
      return (
        <div>
          <button onClick={this.handleClick}>加载</button>
          <button onClick={this.handleClickBack}>回退</button>
          <button onClick={this.handleClickClear}>清除缓存</button>
          <div>
            {this.state.show
              ? <Loading>
                {isLoading => isLoading ? <div>Loading</div> : <FangZheng />}
              </Loading>
              : null
            }
          </div>
        </div>
      )
    }
}
