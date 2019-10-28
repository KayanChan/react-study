import React, { Component, Suspense } from 'react'
import DelayLoading from '../DelayLoading'
import ErrorBoundary from '../ErrorBoundary'

// 懒加载组件
function AsyncComponent(WrappedComponent, title) {
  return class extends Component {
    componentDidMount() {
      document.title = title
    }
    render() {
      return (
        <ErrorBoundary>
          <Suspense fallback={<DelayLoading />}>
            {/* 给组件加上key，让router的path属性（params）指向组件的key，就可以实现，组件的重构 */}
            <WrappedComponent {...this.props} key={this.props.location.pathname}/>
          </Suspense>
        </ErrorBoundary>
      )
    }
  }
}

export default AsyncComponent;