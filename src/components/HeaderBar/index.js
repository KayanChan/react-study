import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import injectsheet from 'react-jss'
import style from './style'
import { Badge, Icon, Tooltip } from 'antd'
import logo from '@/assets/svgs/logo.svg'

@injectsheet(style)
class HeaderBar extends Component {
  state = {
    logo: logo,
    company: 'React Project'
  }
  render() {
    const { classes } = this.props
    const { logo, company } = this.state
    return (
      <div className={classes.headerLayout}>
        <Link className={classes.headerLogo} to='/'>
          <img className={classes.logo} src={logo} alt="logo"/>
          <h1 className={classes.company}>{company}</h1>
        </Link>
        <div className={classes.headerNavLayout}>
          <ul className={classes.headerNav}>
            <li>
              <Tooltip placement="bottom" title={'通知'}>
                <Badge dot>
                  <Icon type="notification"/>
                </Badge>
              </Tooltip>
            </li>
            <li>
              <Tooltip placement="bottom" title={'设置'}>
                <Icon type="setting" />
              </Tooltip>
            </li>
            <li>
              <Tooltip placement="bottom" title={'个人中心'}>
                <Icon type="user" />
              </Tooltip>
            </li>
            <li>
              <Tooltip placement="bottom" title={'退出登录'}>
                <Icon type="logout" />
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderBar