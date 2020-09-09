import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class InputText extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text styles={styles.inputTitle}>{this.props.title}</Text>
                <TextInput
                    onChangeText={text => onChangeText(text)}
                    secureTextEntry={this.props.isSecure}
                    style={StyleSheet.input}>    
                </TextInput>
            
                <View style={{borderBottomWidth: 1, borderBottomColor: "#D8D8D8"}}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputTitle: {
        color: "#ABB4BD",
        fontSize: 14
    },
    input: {
        paddingVertical: 12,
        color: "red",
        fontSize: 14,
    }
})