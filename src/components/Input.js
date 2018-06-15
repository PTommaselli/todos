import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const Input = ({ onChangeText, value }) => (
    <TextInput
        style={ styles.input }
        onChangeText={onChangeText}
        value={value}
    />
)

const styles = StyleSheet.create({
    input:{
        paddingLeft: 15,
        paddingBottom: 15
    }
})

export default Input;