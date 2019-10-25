import React, { Component } from 'react'

class CollapseBar extends Component {
  render() {
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default CollapseBar