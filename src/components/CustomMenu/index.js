import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

@withRouter
class CustomMenu extends Component {
  state = {
    openKeys: [], // 当前展开的 SubMenu 菜单项 key 数组
    selectedKeys: [] // 当前选中的菜单项 key 数组
  }
  onOpenChange = (openKeys) => {
    // 收起的二级菜单 openKeys => []
    // 展开的二级菜单 openKeys => ["/home/about"]
    // console.log(openKeys)

    // 处理第一层父层菜单的
    if (openKeys.length === 0 || openKeys.length === 1) {
      return this.setState({
        openKeys
      })
    }

    // 获取最新的菜单
    const latestOpenKey = openKeys[openKeys.length - 1]
    // 判断最新的菜单级别是不是第一层父层菜单
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      })
    } else {
      this.setState({
        openKeys: [latestOpenKey]
      })
    }
  }
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
  componentDidMount() {
    const pathname = this.props.location.pathname
    const level = pathname.split('/')
    switch(level.length) {
      case 3:
        // console.log('一级目录')
        this.setState({
          selectedKeys: [pathname]
        })
        break
      case 4:
        // console.log('二级目录')
        this.setState({
          selectedKeys: [pathname],
          openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
        })
        break
      case 5:
        // console.log('三级目录')
        this.setState({
          selectedKeys: [pathname],
          openKeys: [level.slice(0, 3).join('/'), level.slice(0, 4).join('/')]
        })
        break
      default:
        break
    }
  }
  render() {
    const { openKeys, selectedKeys } = this.state
    const { menus, theme, mode } = this.props
    return (
      <Menu
        theme={theme}
        mode={mode}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
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