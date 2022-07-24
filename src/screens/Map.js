import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

export default function Map() {

    const cars = ['BMW','HONDA','FORD','LEXUS','BMW','HONDA','FORD','LEXUS','BMW','HONDA','FORD','LEXUS','BMW','HONDA','FORD','LEXUS','BMW','HONDA','FORD','LEXUS']
    console.log(cars);

    return (
        <View>
            <StatusBar />
            <Text>This is data cars, displaying by map</Text>
            {cars.map((car) => (
                <Text key={car}>{car}</Text>
            ))}
        </View>
    )
}
