import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, TextInput } from 'react-native'


export default function Form() {
    return (
        <View style={style.container}>
            <StatusBar />
            <Text style={style.header}>Sign</Text>
            <Text style={style.textStyle}>Email</Text>
            <TextInput style={style.textInput} />
            <Text style={style.textStyle}>Password</Text>
            <TextInput style={style.textInput} />
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        color: "red",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center"
    },
    container: {
        padding: "20px",
        flex: "1"
    },
    textStyle: {
        color: "black",
        fontSize: "15px",
        marginBottom: "20px"
    },
    textInput: {
        height: "45px",
        padding: "20px",
        borderColor: "grey",
        borderWidth: "1px",
        marginBottom: "20px"
    }
})