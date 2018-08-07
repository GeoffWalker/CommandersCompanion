import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GenericButton from '/components/Setup/GenericButton'

export default class App extends React.Component {
  render() {
    return (
      <GenericButton value={24}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
