import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Radio, RadioGroup, RadioButton} from "radio-react-native"

export default class RadioButtonRow extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.input);
        let inputProps = this.props.input,
            val0 = inputProps[0],
            val1 = inputProps[1],
            val2 = inputProps[2],
            val3 = inputProps[3],
            val4 = inputProps[4];

        return (
            <RadioGroup style={style.radioButtonGroup} defaultChoice={2}>
                <RadioButton value={val0}>
                    <Text style={style.radioButton}>{val0}</Text><Radio/>
                </RadioButton>
                <RadioButton value={val1}>
                    <Text style={style.radioButton}>{val1}</Text><Radio/>
                </RadioButton>
                <RadioButton value={val2}>
                    <Text style={style.radioButton}>{val2}</Text><Radio/>
                </RadioButton>
                <RadioButton value={val3}>
                    <Text style={style.radioButton}>{val3}</Text><Radio/>
                </RadioButton>
                <RadioButton value={val4}>
                    <Text style={style.radioButton}>{val4}</Text><Radio/>
                </RadioButton>
            </RadioGroup>
        );
    }
};

const style = new StyleSheet.create({
    radioButtonGroup: {
        width: 100,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioButton: {
        textAlign: 'center'
    }
});