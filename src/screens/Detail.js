import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios'

export default function Detail({route,navigation}) {

    const id = route.params.value._id

    const [form, setForm] = useState({
        name:''
    })
    
    axios({
        method:"GET",
        url:`https://api.kontenbase.com/query/api/v1/32006231-a1d7-491c-8484-799c1206c48e/todos/${id}`
    }).then((response)=> {
        setForm(response.data.name)
    })

    const handleChange = (name, text) => {
        setForm({...form, [name]: text})
    }

    const handleDelete = (id) => {
        axios({
            method:"DELETE",
            url:`https://api.kontenbase.com/query/api/v1/32006231-a1d7-491c-8484-799c1206c48e/todos/${id}`
        })
        navigation.navigate('Todo List')
    }

    return (
        <View style={style.container}>
            <View>
                <TextInput name="name" style={style.textInput} onChangeText={(text)=> handleChange('name',text)} value={form} />
                <TouchableOpacity onPress={()=> handleUpdate()} style={style.btnUpdate}><Text>Update</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> handleDelete(id)} style={style.btnDelete}><Text>Delete</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        padding: "20px",
        flex: "1"
    },
    textInput: {
        height: "45px",
        padding: "20px",
        borderColor: "grey",
        borderWidth: "1px",
        marginBottom: "20px"
    },
    btnUpdate: {
        backgroundColor: "green",
        padding: 10,
        width: 70
    },
    btnDelete: {
        backgroundColor: "red",
        padding: 10,
        width: 70
    }
})
