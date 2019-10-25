import React, { Component } from 'react'
import { withRouter, Switch, Redirect, Route } from 'react-router-dom'
import AsyncComponent from '@/components/HOC/AsyncComponent'
import ProtectedRoute from '@/components/ProtectedRoute'
import NotFound from '@/components/NotFound'
import Routes from '@/router/config'

@withRouter
class MainContent extends Component {
  mountRoute = ({key, component, title}) => {
    return component && <ProtectedRoute exact key={key} path={key} component={AsyncComponent(component, title)}/>
  }
  mountSubRoute = ({key, subRoutes}) => {
    return subRoutes && subRoutes.length && subRoutes.map(subRoute => {
      return subRoute.component ? this.mountRoute(subRoute) : this.mountSubRoute(subRoute)
    })
  }
  render() {
    return (
        <div style={{padding: 16, position: 'relative'}}>
          <Switch>
            {
              Routes && Routes.length && Routes.map(route => {
                return route.component ? this.mountRoute(route): this.mountSubRoute(route)
              })
            }
            {/* 默认路由 */}
            <Redirect exact from='/' to='/home/database' />
            <Route component={NotFound}/>
          </Switch>
        </div>
    )
  }
}

export default MainContent