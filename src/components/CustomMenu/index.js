import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

@withRouter
class CustomMenu extends Component {
  getDefaultOpenKeys = (pathname) => {
    if(this.props.collapsed) return []

    const level = pathname.split('/')
    let keys = []
    for(let i=3; i<level.length; i++) {
      keys.push(level.slice(0, i).join('/'))
    }
    return keys
  }

  state = {
    defaultSelectedKeys: [this.props.location.pathname],
    defaultOpenKeys: this.getDefaultOpenKeys(this.props.location.pathname)
  }

  _renderMenuItem = ({ key, icon, title }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon}/>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }

  _renderSubMenu = ({ key, icon, title, subRoutes }) => {
    return (
      <SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
        {
          subRoutes && subRoutes.map(item => {
            return item.subRoutes && item.subRoutes.length > 0 ? this._renderSubMenu(item) : this._renderMenuItem(item)
          })
        }
      </SubMenu>
    )
  }

  render() {
    const { defaultSelectedKeys, defaultOpenKeys } = this.state
    const { menus, theme, mode, history } = this.props
    return (
      <Menu
        theme={theme}
        mode={mode}
        selectedKeys={[history.location.pathname]}
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}>
          {menus && menus.map(item => {
            return (item.subRoutes && item.subRoutes.length) ? (this._renderSubMenu(item)) : this._renderMenuItem(item)
          })}
      </Menu>
    )
  }
}

export default CustomMenu