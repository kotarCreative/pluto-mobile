/**
 * Standard button component
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import COLOR from '@/constants/colors'

// styles
const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 200
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.WHITE,
    padding: 10
  },
  footer: {
    padding: 10
  }
})

export class FormLayout extends PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.form}>
        {this.renderChildren()}
      </View>
    )
  }

  renderChildren() {
    const fields = this.props.children
    let output = []
    for (i = 0; i < fields.length - 1; i++) {
      output.push(
        <View style={styles.separator} key={'form_' + i}>
          {fields[i]}
        </View>
      )
    }
    output.push(<View style={styles.footer} key={'form_' + i}>{fields[i]}</View>)
    return output
  }
}
