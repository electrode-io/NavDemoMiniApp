/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListItem,
  TouchableHighlight
} from 'react-native';
import { ErnNavigationApi} from 'ern-showcase-navigation-api'


export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
          loading: false,
          data: [],
          page: 1,
          seed: 1,
          error: null,
          refreshing: false,
          selected:{}
        };
    this.state.data = [
      {identifier: 0, title: "Push a screen", isSelected: false, path: "NavDemoMiniApp/push_screen"},
      {title: "Show Modal", isSelected: false, path:"NavDemoMiniApp/show_modal"},
      {title: "Show Toast", isSelected: false, path:"NavDemoMiniApp/show_toast"},
      {title: "Custom Button", isSelected: false, path:"NavDemoMiniApp/custom_buttons"}
    ];
    this._handlePopToRoot = this._handlePopToRoot.bind(this)
  }


  render() {
    return (
      <FlatList
          style={styles.container}
          data={this.state.data}
          renderItem={({item}) =>
          <TouchableHighlight onPress={() => this._onPressRow(item)} underlayColor="gray">
            <View style={styles.row} onPress={() => this._onPressRow(item)}>
                <Text style={styles.row2}>{item.title}</Text>
            </View>
            </TouchableHighlight>}
        />
    );
  }
_handlePopToRoot() {
  console.log(`pop to root is handled`)
  this.state.data[0].payload = 0
}


_onPressRow (item) {
     item.isSelect = !item.isSelect
     const route = {
       path: item.path,
       navBar: {
         title: item.title,
         rightButtons: [
             {
               name: "CutomButton",
               identifier: "rightButtonIdentifier"
             }
         ]
       },
       payload: "1"
     }
     ErnNavigationApi.requests().navigate(route).then(() => {

     }).catch(() => {
       console.log("Navigation failed.");
     })
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 5,
    backgroundColor: 'black'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12
  },
  row2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12
  }
})
