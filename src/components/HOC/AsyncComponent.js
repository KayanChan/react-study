import React, { Component, Suspense } from 'react';
import DelayLoading from '../DelayLoading';
import ErrorBoundary from '../ErrorBoundary';

// 懒加载组件
function AsyncComponent(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      console.log('load finished');
    }
    render() {
      return (
        <ErrorBoundary>
          <Suspense fallback={<DelayLoading />}>
            <WrappedComponent {...this.props} />
          </Suspense>
        </ErrorBoundary>
      )
    }
  }
}

export default AsyncComponent;