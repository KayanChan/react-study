import React, { Component } from 'react'
import CustomMenu from '@/components/CustomMenu'
import menus from '@/router/config'

class SiderNav extends Component {
  render() {
    const { theme, mode, collapsed } = this.props
    return (
      <CustomMenu
        menus={menus}
        theme={theme}
        mode={mode}
        collapsed={collapsed}/>
    )
  }
}

export default SiderNav