import React, { Component } from 'react';
import {
  Text,
  StyleSheet
 } from 'react-native';

export default class ModalScreen extends Component {
  render() {
    return (
      <Text style={styles.container}>Modal Screen</Text>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 5
  }
})
