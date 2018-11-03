/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import './config'
import './bootstrap'

import { Login } from '@/components/auth/Login'

import store from '@/store'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Login></Login>
      </Provider>
    )
  }
}
