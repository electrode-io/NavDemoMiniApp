import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View
 } from 'react-native';
 import { ShowcaseNavigationApi} from 'ern-showcase-navigation-api'
 import  App  from './App'

export default class ShowModal extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(`Payload: ${this.props.payload}`)
    return (
      <View style={styles.container}>
          <Text>This is a modal screen. </Text>
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
