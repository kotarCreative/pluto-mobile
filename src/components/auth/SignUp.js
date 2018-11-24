/**
 * Sign up screen
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getBottomSpace } from 'react-native-iphone-x-helper'

// Components
import { Button } from '@/components/shared/Button'
import { FormLayout } from '@/components/shared/FormLayout'
import { TextInput } from '@/components/shared/TextInput'
import { ViewWithBg } from '@/components/shared/ViewWithBg'

import { BRAND_SECONDARY_HIGHLIGHT, WHITE } from '@/constants/colors'
import logo from '@/assets/logos/wordmark.png'

// Styles
const styles = StyleSheet.create({
  accountBtn: {
    backgroundColor: BRAND_SECONDARY_HIGHLIGHT,
    padding: 10,
    paddingBottom: getBottomSpace() - 10
  },
  centeredContainer: {
    alignSelf: 'center',
    width: 200
  },
  footer: {
    right: 0,
    left: 0,
    position: 'absolute',
    bottom: 0
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 60
  },
  loginBtnTxt: {
    textAlign: 'center',
    color: WHITE
  },
  signUpButton: {
    marginTop: 30,
    width: '100%'
  }
})

export class SignUp extends PureComponent {
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
             <TextInput placeholder="Confirm Password"
                        textContentType="password"
                        secureTextEntry
                        onChangeText={text => {}}
                        />
          </FormLayout>
          <Button title="Sign Me Up"
                  style={styles.signUpButton}
                  onPress={() =>  "Clicked"}
                  disabled={true}
                  secondary={true}
                  />
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => Actions.pop()}
            style={styles.accountBtn}
            underlayColor={BRAND_SECONDARY_HIGHLIGHT}
          >
            <Text style={styles.loginBtnTxt}>Already have an account?</Text>
          </TouchableHighlight>
        </View>
      </ViewWithBg>
    )
  }
}
