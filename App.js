import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GameScreen from './components/Setup/GameScreen';
import PlayerCard from './components/Setup/PlayerCard';
import SetUpPage from './components/Setup/SetUpPage';

var App = React.createClass({
  _renderScene(route, navigator) {
      if (route.id === 1){
          return <SetUpPage navigator={navigator} />
      }
      else if (route.id === 2){
          return <GameScreen navigator={navigator} />
      }
  },

  render(){
      return (
          <navigator
              initialRoute={{id: 1, }}
              renderScene={this._renderScene} />
      )
  }
});

const style = new StyleSheet.create({
    viewWindow: {
        flex: 1,
        alignSelf: 'center',
        height: "90%",
        width: "90%",
    }
});
