/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { Overlay, Router, Stack, Scene } from 'react-native-router-flux'
import './config'
import './bootstrap'

import { Login } from '@/components/auth/Login'
import { SignUp } from '@/components/auth/SignUp'

import store from '@/store'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Overlay key="overlay">
            <Stack key="loginStack" hideNavBar>
              <Scene key="login" component={Login} initial hideNavBar />
              <Scene key="signup" component={SignUp} />
            </Stack>
          </Overlay>
        </Router>
      </Provider>
    )
  }
}
