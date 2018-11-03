/**
 * Standard background component
 *
 * @format
 * @flow
 */
import React, { PureComponent } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import mainBg from '@/assets/images/sky-bg.png' //eslint-disable-line

// style
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1
  },
  bg: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    width: '100%'
  }
})

export class ViewWithBg extends PureComponent<Props, State> {
  render() {
    return (
      <View
        style={styles.wrapper}
        {...this.props}
      >
        <View style={styles.main}>
          <Image
            style={styles.bg}
            source={mainBg}
          />
        </View>
        <View style={styles.inner}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
