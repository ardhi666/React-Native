import React, { useState } from "react";
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios'

export default function TodoApp({ navigation }) {

  const [task, setTask] = useState([])
  const [clicker, setClicker] = useState('Submit')
  const [name, setName] = useState('')
  const [selected, setSelected] = useState({})

  axios({
    method: "GET",
    url: "https://api.kontenbase.com/query/api/v1/32006231-a1d7-491c-8484-799c1206c48e/todos"
  }).then((response) => {
    setTask(response.data)
  })



  const submit = () => {
    if(clicker === 'Submit'){
      axios.post('https://api.kontenbase.com/query/api/v1/32006231-a1d7-491c-8484-799c1206c48e/todos', {
        name: name
      })
      Keyboard.dismiss()
      setName('')
    }else if(clicker === 'Update'){
      axios.patch(`https://api.kontenbase.com/query/api/v1/32006231-a1d7-491c-8484-799c1206c48e/todos/${selected._id}`, {
        name: name
      })
      Keyboard.dismiss()
      setName('')
      setClicker('Submit')
    }
  }

  const handleUpdate = (item)=> {
    console.log(item);
    setName(item.name)
    setClicker('Update')
    setSelected(item)
  }

  const handleDelete = (value) => {
    const id = value._id
    // navigation.navigate('Detail', {value})
    axios({
      method:"DELETE",
      url:`https://api.kontenbase.com/query/api/v1/32006231-a1d7-491c-8484-799c1206c48e/todos/${id}`
  })
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My Todos List</Text>
        <View style={styles.items}>
          {
            task?.map((item) => {
              return (
                <TouchableOpacity key={item._id} onPress={()=> handleUpdate(item)}>
                  <View style={styles.item}>
                    <View style={styles.itemLeft}>
                      <TouchableOpacity style={styles.square}  onPress={() => handleDelete(item)}/>
                      <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                    <View style={styles.circular}></View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add New Task'} onChangeText={(value) =>setName(value)} value={name} />
        <TouchableOpacity onPress={() => submit()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>{clicker}</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  taskWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#007AB8',
    borderWidth: 1,
    width: 300
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#007AB8",
    borderWidth: 1
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.4,
    backgroundColor: "#007AB8",
    borderRadius: 5,
    marginRight: 10
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#007AB8",
    borderWidth: 2,
    borderRadius: 5
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.4,
    backgroundColor: "#007AB8",
    borderRadius: 5,
    marginRight: 10
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#007AB8",
    borderWidth: 2,
    borderRadius: 5
  }
})