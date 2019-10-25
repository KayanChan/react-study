import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if(this.state.errorInfo) {
      return (
        <div>
          <h2>当前页面发生了错误</h2>
          <div>Error: {this.state.error && this.state.error.toString()}</div>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;