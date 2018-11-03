/**
 * Standard button component
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { BLACK, BRAND_SECONDARY_HIGHLIGHT, WHITE } from '@/constants/colors'

// styles
const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 5,
    borderColor: BLACK,
    borderWidth: 1
  },
  enabledButton: {
    backgroundColor: BRAND_SECONDARY_HIGHLIGHT,
    borderWidth: 0
  },
  text: {
    color: BLACK,
    textAlign: 'center'
  },
  enabledText: {
    color: WHITE
  },
  secondaryBtn: {
    borderColor: WHITE
  },
  secondaryText: {
    color: WHITE
  }
})

export class Button extends PureComponent<Props, State> {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={{ ...styles.button, ...!this.props.disabled ? styles.enabledButton : {}, ...this.props.secondary ? styles.secondaryBtn : {}, ...this.props.style}}
        underlayColor={BRAND_SECONDARY_HIGHLIGHT}
        disabled={this.props.disabled}
      >
        <Text style={{ ...styles.text, ...!this.props.disabled ? styles.enabledText : {}, ...this.props.secondary ? styles.secondaryText : {}}}>{this.props.title}</Text>
      </TouchableHighlight>
    )
  }
}
