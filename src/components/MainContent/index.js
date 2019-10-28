import React, { Component } from 'react'
import { withRouter, Switch, Redirect, Route } from 'react-router-dom'
import AsyncComponent from '@/components/HOC/AsyncComponent'
import ProtectedRoute from '@/components/ProtectedRoute'
import NotFound from '@/components/NotFound'
import Routes from '@/router/config'

@withRouter
class MainContent extends Component {
  _mountRoute = ({key, component, title}) => {
    return component && <ProtectedRoute exact key={key} path={key} component={AsyncComponent(component, title)}/>
  }
  _mountSubRoute = ({key, subRoutes}) => {
    return subRoutes && subRoutes.length && subRoutes.map(subRoute => {
      return subRoute.component ? this._mountRoute(subRoute) : this._mountSubRoute(subRoute)
    })
  }
  render() {
    return (
        <div style={{position: 'relative'}}>
          <Switch>
            {
              Routes && Routes.length && Routes.map(route => {
                return route.component ? this._mountRoute(route): this._mountSubRoute(route)
              })
            }
            {/* 默认路由 */}
            <Redirect exact from='/' to='/home/data' />
            <Route component={NotFound}/>
          </Switch>
        </div>
    )
  }
}

export default MainContent