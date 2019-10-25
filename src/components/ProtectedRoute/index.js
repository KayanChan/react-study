import React from 'react'
import { Route, Redirect, } from 'react-router-dom'

// 登录状态
const isLogin = true

// ...rest es6 rest参数
// Route Component 接收route props
const ProtectedRoute = ({component: Component, ...rest}) => (
  // 内联渲染
  // Route render, render接收传入函数
  <Route {...rest} render={(props) => (
    // 根据【是否登录】判断默认路由
    // 否：goto登录页，并且记录当前location
    // 是：Route Component匹配的路由
    !!isLogin
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
  )}/>
)

export default ProtectedRoute