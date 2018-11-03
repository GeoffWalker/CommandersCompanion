import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PlayerCard from './components/Setup/PlayerCard';

var GameScreen = React.createClass({
  _handlePress() {
    this.props.navigator.pop();
  },

  render() {
    return (
      <View style={style.viewWindow}>
          <Text>GAME TIME</Text>
      </View>
    )
  },
});
