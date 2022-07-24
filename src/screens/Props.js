import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Image } from 'react-native'
import List from '../components/List'

export default function Props() {

    let pic = {
        uri: "https://images.unsplash.com/photo-1654991940035-ffe67f6ae469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }

    return (
        <View>
            <StatusBar />
            <Text>On the Image element, using props "source"</Text>
            <Image source={pic} style={{ width: "100%", height: "200px" }} />
            <List listData="This Is Text 1" />
            <List listData="This Is Text 2" />
        </View>
    )
}
