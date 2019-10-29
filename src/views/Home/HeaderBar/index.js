import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import injectsheet from 'react-jss'
import style from './style'
import { Badge, Icon, Tooltip } from 'antd'
import logo from '@/assets/svgs/logo.svg'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

@withRouter
@injectsheet(style)
@inject('appStore')
@observer
class HeaderBar extends Component {
  state = {
    logo: logo,
    company: 'React Project'
  }
  _logout = () => {
    this.props.appStore.toggleLogin(false)
    this.props.history.push({pathname: '/login'})
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
            <li onClick={this._logout}>
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