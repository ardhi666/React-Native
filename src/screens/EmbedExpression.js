import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'


export default function EmbedExpression() {

    const companyName = "DumbMerch.id"
    function getMajor(){
        return "Fullstack Developer"
    }

    return (
        <View>
            <StatusBar/>
            <Text>
                Welcome to {companyName},Class {getMajor()}
            </Text>
        </View>
    )
}

