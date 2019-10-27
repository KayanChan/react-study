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
      this.props.history.go(1);
      // this.props.appStore.toggleLogin(false) //也可以设置退出登录
    }
  }
  _login = () => {
    this.props.appStore.toggleLogin(true)
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    this.props.history.push(from)
  }
  render() {
    return (<div>
      <h4>Login Page</h4>
      <Button type="primary" onClick={this._login}>登录</Button>
    </div>)
  }
}

export default Login