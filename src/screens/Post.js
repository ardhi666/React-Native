import React,{useEffect,useState} from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import {ListenItem, Avatar} from 'react-native-element'

import axios from 'axios'

const Post = (Props)=> {

    const [post,setPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        getPost()
    },[])

    const getPost = ()=> {
        setIsLoading(true)
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            setPost(res.data)
            setIsLoading(false)
        })
        .catch(()=>{
            alert('ERROR')
            setIsLoading(false)
        })
    }


    return(
        <>
        </>
    )



}