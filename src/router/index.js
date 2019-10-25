import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import Login from '@/views/Login'
import Home from '@/views/Home'

function Router() {
  return (
    <Switch>
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/' component={Home} />
    </Switch>
  )
}

export default Router