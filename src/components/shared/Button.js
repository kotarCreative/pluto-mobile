/**
 * Standard button component
 *
 * @format
 * @flow
 */

import React from 'react';
import { PureComponent } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import COLOR from '@/constants/colors'

// styles
const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 5,
    borderColor: COLOR.BLACK,
    borderWidth: 1
  },
  enabledButton: {
    backgroundColor: COLOR.BRAND_SECONDARY_HIGHLIGHT,
    borderWidth: 0
  },
  text: {
    color: COLOR.BLACK
  },
  enabledText: {
    color: COLOR.WHITE
  }
});

export class Button extends PureComponent<Props, State> {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={{ ...styles.button, ...!this.props.disabled ? styles.enabledButton : {}}}
        underlayColor={COLOR.BRAND_SECONDARY_HIGHLIGHT}
      >
        <Text style={{ ...styles.text, ...!this.props.disabled ? styles.enabledText : {}}}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}
