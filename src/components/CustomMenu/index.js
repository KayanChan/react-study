import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import routes from '@/router/config'

const { SubMenu } = Menu

@withRouter
class CustomMenu extends Component {
  _getDefaultOpenKeys = (pathname) => {
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
    defaultOpenKeys: this._getDefaultOpenKeys(this.props.location.pathname)
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
      <SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>} onTitleClick={this._titleClick}>
        {
          subRoutes && subRoutes.map(item => {
            return item.subRoutes && item.subRoutes.length > 0 ? this._renderSubMenu(item) : this._renderMenuItem(item)
          })
        }
      </SubMenu>
    )
  }
  _redirectMatchPathname = (_routes, clickPathname) => {
    let tmpRoutes = _routes.filter(route => {
      return route.key.indexOf(clickPathname) !== -1
    })
    if(!tmpRoutes.length) {
      tmpRoutes = _routes.filter(route => {
        return clickPathname.indexOf(route.key) !== -1
      })
    }
    if(tmpRoutes && tmpRoutes.length) {
      const { key, subRoutes } = tmpRoutes[0]
      if(subRoutes && subRoutes.length) {
        this._redirectMatchPathname(subRoutes, clickPathname)
      }else{
        this.props.history.push({pathname: key})
      }
    }
  }
  _titleClick = ({key}) => {
    if(this.props.location.pathname.indexOf(key) === -1) {
      this._redirectMatchPathname(routes, key)
    }
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