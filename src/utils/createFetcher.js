import React, { PureComponent, createElement } from 'react'
import { zipObject, identity, noop } from 'lodash'
import { wrapDisplayName } from 'recompose'

/**
 * 为一个组件加上初始化时异步获取数据的能力
 *
 * @param {Object} fetches 一个对象，键为属性的名称，值为一个异步的数据获取函数。在获取该对象表达的所有数据后，会渲染实际组件
 * @param {Object} [options] 额外的配置项
 * @param {Function} [options.mergeValues] 在`fetches`参数提供的数据均完成获取后，得到的结果可以经过该函数进行进一步处理
 * @param {Component} [options.loadingComponent] 在数据获取过程中显示的加载指示组件的类型，组件渲染时会提供当前组件的`props`
 * @param {Function} [options.onError] 数据加载出错时调用的回调，调用时提供参数`(error, props)`
 * @return {Function} 返回一个高阶组件
 *
 * @example
 * ```js
 * import {PureComponent} from 'react';
 * import {render} from 'react-dom';
 * import requireFetch from './requireFetch';
 *
 * const fetchName = () => Promise.reject(new Error('Failed to fetch name'));
 *
 * const fetchHistory = () => Promise.resolve([1, 2, 3]);
 *
 * const FetchError = ({error}) => (
 *     <div>
 *         <p>
 *             <strong>{error.message}</strong>
 *         </p>
 *         <pre>
 *             {error.stack}
 *         </pre>
 *     </div>
 * );
 *
 * const Loading = () => <div>加载中</div>;
 *
 * const Main = ({name, history}) => (
 *     <div>
 *         <h1>{name}</h1>
 *         <ul>
 *             {history.map(i => <li key={i}>{i}</li>)}
 *         </ul>
 *     </div>
 * );
 *
 * const fetches = {
 *     name: fetchName,
 *     history: fetchHistory
 * };
 *
 * const options = {
 *     loadingComponent: Loading,
 *     onError(error, props) {
 *         props.onError(error);
 *     }
 * };
 *
 * const WrappedMain = requireFetch(fetches, options)(Main);
 *
 * class App extends PureComponent {
 *
 *     state = {error: null};
 *
 *     render() {
 *         const {error} = this.state;
 *
 *         if (error) {
 *             return <FetchError error={error} />
 *         }
 *
 *         return <WrappedMain {...this.props} onError={error => this.setState({error})} />;
 *     }
 * }
 *
 * render(
 *     <App />,
 *     document.body.appendChild(document.createElement('div'))
 * );
 * ```
 */
export default (fetches, options = {}) => Component => {
  const {mergeValues = identity, fallback = null, onError = noop} = options

  const WrappedComponent = class extends PureComponent {
      static displayName = wrapDisplayName(Component, 'requireFetch');

      state = {
        pending: true,
        data: null
      };

      async componentDidMount () {
        const tasks = Object.values(fetches).map(fetch => fetch(this.props))
        const keys = Object.keys(fetches)
        try {
          const values = await Promise.all(tasks)
          const data = zipObject(keys, values)
          this.setState({pending: false, data: mergeValues(data)})
        } catch (ex) {
          onError(ex, this.props)
        }
      }

      render () {
        const {pending, data} = this.state

        if (pending) {
          return fallback ? createElement(fallback, this.props) : null
        }

        return <Component {...this.props} {...data} />
      }
  }

  return WrappedComponent
}
