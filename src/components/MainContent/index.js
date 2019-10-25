import React, { Component } from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import Routes from '@/router/config'

@withRouter
class MainContent extends Component {
  mountRoute = ({key, component}) => {
    return component && <ProtectedRoute exact key={key} path={key} component={component}/>
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
            <Redirect exact from='/' to='/home/database' />
          </Switch>
        </div>
    )
  }
}

export default MainContent