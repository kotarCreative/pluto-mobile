/**
 * Standard button component
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

// Components
import { Button } from '@/components/shared/Button';
import { FormLayout } from '@/components/shared/FormLayout';
import { TextInput } from '@/components/shared/TextInput';
import { ViewWithBg } from '@/components/shared/ViewWithBg';

import { BRAND_SECONDARY_HIGHLIGHT, WHITE } from '@/constants/colors';
import logo from '@/assets/logos/wordmark.png'

// Styles
const styles = StyleSheet.create({
  accountBtn: {
    backgroundColor: BRAND_SECONDARY_HIGHLIGHT,
    padding: 10
  },
  accountBtnTxt: {
    textAlign: 'center',
    color: WHITE
  },
  centeredContainer: {
    alignSelf: 'center',
    width: 200
  },
  footer: {
    right: 0,
    left: 0,
    position: 'absolute',
    bottom: 0,
  },
  forgotPwBtn: {
    padding: 15
  },
  forgotPwTxt: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 12,
  },
  loginButton: {
    marginTop: 30,
    width: '100%'
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 60
  }
})

export class Login extends PureComponent {
  render() {
    return (
      <ViewWithBg>
        <View style={styles.centeredContainer}>
          <Image style={styles.logo} source={logo} />
          <FormLayout>
            <TextInput placeholder="Email"
                       onChangeText={text => {}}
                       />
            <TextInput placeholder="Password"
                       textContentType="password"
                       secureTextEntry
                       onChangeText={text => {}}
                       />
          </FormLayout>
          <Button title="Blast Off"
                  style={styles.loginButton}
                  onPress={() =>  "Clicked"}
                  disabled={true}
                  secondary={true}
                  />
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => {}}
            style={styles.forgotPwBtn}
            underlayColor={BRAND_SECONDARY_HIGHLIGHT}
          >
            <Text style={styles.forgotPwTxt}>Forgot your password?</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {}}
            style={styles.accountBtn}
            underlayColor={BRAND_SECONDARY_HIGHLIGHT}
          >
            <Text style={styles.accountBtnTxt}>Don't have an account?</Text>
          </TouchableHighlight>
        </View>
      </ViewWithBg>
    )
  }
}
