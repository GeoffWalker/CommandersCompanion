import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RadioButtonRow from './components/Setup/RadioButtonRow';

export default class App extends React.Component {
    render() {
        return (
            <View style={style.viewWindow}>
                <Text>How many players would you like to play with?</Text>
                <RadioButtonRow input={[2,3,4,5,6]}/>
                <Text>How much life would you like to start with?</Text>
                <RadioButtonRow input={[10,20,30,40, 'other']}/>
            </View>
        )
    }
}

const style = new StyleSheet.create({
    viewWindow: {
        flex: 1,
        alignSelf: 'center',
        height: "90%",
        width: "90%",
    }
});