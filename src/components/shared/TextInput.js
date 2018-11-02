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
    padding: 5
  }
})

export class TextInput extends PureComponent<Props, State> {
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