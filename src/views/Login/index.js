import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

@withRouter
@inject('appStore')
@observer
class Login extends Component {
  componentDidMount () {
    const { isLogin } = this.props.appStore
    if(isLogin) {
      // 当浏览器用后退按钮回到登录页时
      // 判断登录页是否登录，是登录就重定向上个页面
      this._jumpPage()
    }
  }
  _login = () => {
    this.props.appStore.toggleLogin(true)
    this._jumpPage()
  }
  _jumpPage = () => {
    if(this.props.history.action === 'POP') {
      this.props.history.goBack()
    }
    this.props.history.push({pathname: '/'})
  }
  render() {
    return (<div>
      <h4>Login Page</h4>
      <Button type="primary" onClick={this._login}>登录</Button>
    </div>)
  }
}

export default Login