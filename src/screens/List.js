import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, FlatList } from 'react-native'

export default function List() {

    const data = [
        {
            name: "ilham"
        },
        {
            name: "admin"
        },
        {
            name: "customer"
        },
        {
            name: "customer"
        },
        {
            name: "customer"
        },
        {
            name: "customer"
        }   
    ]

    return (
        <View>
            <StatusBar />
            <FlatList
                data={data} 
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.name}
            />
        </View>
    )
}
