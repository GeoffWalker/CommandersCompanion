import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GenericButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Button
              icon={
                <Icon
                name='chevron-right'
                size={15}
                color='black'/>
              }
              title = 'Start Game'
              />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: .1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
