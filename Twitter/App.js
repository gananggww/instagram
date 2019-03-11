import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Main from './src/components'

import { Provider } from "react-redux";

import store from './src/redux/store'
// import Navigation from './src/route/navigations'

export default class App extends Component {
  render() {
    return (
      <View>
        <Provider store={store}>
            <Main></Main>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
