import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Router from '@/router'
import { Provider } from 'mobx-react'
import store from '@/store'

function App() {
  return (
    <Provider {...store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
