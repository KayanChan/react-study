import React, { Component } from 'react'
import CustomMenu from '@/components/CustomMenu'
import menus from '@/router/config'

class SiderNav extends Component {
  render() {
    const { theme, mode } = this.props
    return (
      <CustomMenu
        menus={menus}
        theme={theme}
        mode={mode}/>
    )
  }
}

export default SiderNav