import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu

class CustomMenu extends Component {
  state = {
    // openKeys: [], // 当前展开的 SubMenu 菜单项 key 数组
    // selectedKeys: [] // 当前选中的菜单项 key 数组
  }
  onOpenChange = () => {
    // console.log('SubMenu 展开/关闭的回调')
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

  render() {
    // const { openKeys, selectedKeys } = this.state
    const { menus, theme, mode } = this.props
    return (
      <Menu
        theme={theme}
        mode={mode}
        // openKeys={openKeys}
        // selectedKeys={selectedKeys}
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