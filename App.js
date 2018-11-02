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

import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from '@/components/shared/Button';
import { TextInput } from '@/components/shared/TextInput';

import store from '@/store'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Button title="hello World" onPress={() =>  "Clicked"} disabled={true}/>
          <TextInput placeholder="username" />
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
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
});
