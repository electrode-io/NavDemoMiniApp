import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View
 } from 'react-native';
 import { ShowcaseNavigationApi} from 'ern-showcase-navigation-api'

export default class CustomButtons extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>This is cutstom button screen. </Text>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 80,
    padding: 5,
    margin:20
  }
})
