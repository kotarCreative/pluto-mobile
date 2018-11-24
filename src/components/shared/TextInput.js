/**
 * Standard input component
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react'
import { StyleSheet, TextInput as DefaultInput, TouchableHighlight } from 'react-native'
import COLOR from '@/constants/colors'

// styles
const styles = StyleSheet.create({
  input: {
    color: COLOR.WHITE,
    padding: 5,
    textAlign: 'center',
    fontSize: 18
  }
})

export class TextInput extends PureComponent {
  render() {
    return (
      <DefaultInput
        {...this.props}
        placeholderTextColor={COLOR.OFF_WHITE}
        editable={true}
        selectionColor={COLOR.OFF_WHITE}
        style={styles.input} />
    )
  }
}
