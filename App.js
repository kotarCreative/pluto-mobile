/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import './config'
import './bootstrap'

import { Platform, StyleSheet, Text } from 'react-native';
import { Button } from '@/components/shared/Button';
import { TextInput } from '@/components/shared/TextInput';
import { ViewWithBg } from '@/components/shared/ViewWithBg';

import store from '@/store'

// styles
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ViewWithBg>
          <Button title="hello World" onPress={() =>  "Clicked"} disabled={true}/>
          <TextInput placeholder="username" />
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
        </ViewWithBg>
      </Provider>
    );
  }
}
