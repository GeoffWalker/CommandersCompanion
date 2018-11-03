import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import RadioButtonRow from './components/Setup/RadioButtonRow';

var SetUpPage = React.createClass({
  _handlePress() {
    this.props.navigator.push({id: 1});
  },
  render(){
    return (
      <View style={style.viewWindow}>
          <Text>Number of Players</Text>
          <RadioButtonRow input={[2,3,4,5,6]}/>
          <Text>Starting Life</Text>
          <RadioButtonRow input={[10,20,30,40, 'other']}/>
          <Button
              onPress={startGame}
              title="Start Game"
              color="#841584"
              accessibilityLabel="Learn more"
          />
      </View>
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

function startGame(){
    this.props.navigator.route.id = 2;
};
