import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
});

export default Main