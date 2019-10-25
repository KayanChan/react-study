import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

@withRouter
class CustomMenu extends Component {
  state = {}
  // onOpenChange = (openKeys) => {
  //   // 收起的二级菜单 openKeys => []
  //   // 展开的二级菜单 openKeys => ["/home/about"]
  //   // console.log(openKeys)

  //   // 处理第一层父层菜单的
  //   if (openKeys.length === 0 || openKeys.length === 1) {
  //     return this.setState({
  //       openKeys
  //     })
  //   }

  //   // 获取最新的菜单
  //   const latestOpenKey = openKeys[openKeys.length - 1]
  //   // 判断最新的菜单级别是不是第一层父层菜单
  //   if (latestOpenKey.includes(openKeys[0])) {
  //     this.setState({
  //       openKeys
  //     })
  //   } else {
  //     this.setState({
  //       openKeys: [latestOpenKey]
  //     })
  //   }
  // }
  renderMenuItem = ({ key, icon, title }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon}/>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }

  renderSubMenu = ({ key, icon, title, subRoutes }) => {
    return (
      <SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
        {
          subRoutes && subRoutes.map(item => {
            return item.subRoutes && item.subRoutes.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </SubMenu>
    )
  }
  render() {
    const { menus, theme, mode } = this.props
    return (
      <Menu
        theme={theme}
        mode={mode}
        onOpenChange={this.onOpenChange}
        onClick={({key}) => this.setState({selectedKeys: [key]})}>
          {menus && menus.map(item => {
            return (item.subRoutes && item.subRoutes.length) ? (this.renderSubMenu(item)) : this.renderMenuItem(item)
          })}
      </Menu>
    )
  }
}

export default CustomMenu