/**
 * Standard button component
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'

// Components
import { Button } from '@/components/shared/Button';
import { FormLayout } from '@/components/shared/FormLayout';
import { TextInput } from '@/components/shared/TextInput';
import { ViewWithBg } from '@/components/shared/ViewWithBg';

// Styles
const styles = StyleSheet.create({
  loginButton: {
    marginTop: 30
  }
})

export class Login extends PureComponent {
  render() {
    return (
      <ViewWithBg>
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
        <Button title="Blast Off" style={styles.loginButton} onPress={() =>  "Clicked"} disabled={false}/>
      </ViewWithBg>
    )
  }
}
