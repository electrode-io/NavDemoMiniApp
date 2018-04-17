import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View
 } from 'react-native';
 import { ShowcaseNavigationApi} from 'ern-showcase-navigation-api'
 import  App  from './App'

export default class PushScreen extends Component<Props> {
  constructor(props) {
    super(props)
    this._onPressButton = this._onPressButton.bind(this)
    this._onPressPopToRoot = this._onPressPopToRoot.bind(this)
  }

  render() {
    console.log(`Payload: ${this.props.payload}`)
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
             style={styles.button}
             onPress={this._onPressButton}
             title="Push Another Screen"
          />
          <Button
              style={styles.button}
              onPress={this._onPressPopToRoot}
              title="Pop To Root"
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Pushed Screen: {this.props.payload}</Text>
        </View>

      </View>

    );
  }

  _onPressPopToRoot() {
    console.log(`Pop to root clicked`)
    const route = {
      path: "ern/NavDemoMiniApp",
      popType: {
        popToRoot: true
      },
      payload:"0"
    }

    ShowcaseNavigationApi.requests().navigate(route).then(() => {
      console.log("Reset payload to zero")
    }).catch((e) => {
      console.log(`Pop to root failed because: ${e}`);
    })

  }

  _onPressButton() {
    console.log(`on button pressed: ${this.props.payload}`)
    const screenNumber = parseInt(this.props.payload)
    const route = {
      path: "ern/NavDemoMiniApp/push_screen",
      payload: JSON.stringify(screenNumber+1)
    }
    ShowcaseNavigationApi.requests().navigate(route).catch(() => {
      console.log("Navigation failed.");
    })
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
  },
  buttonContainer: {
    margin: 30
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 20
  }

})
