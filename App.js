import React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'

import User from './components/user/User';

export default function App() {

  const BtnSubmitname = "Run 55";

  return (
    <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

      }}
    >
      {/* <Text>Hello btn</Text> */}
      <User fname="day" lname="pro"></User>

      <View style={{height:24}} />
      <Button title="ClickMe1" onPress={()=>alert("Hello")} />
      <View style={{height:24}} />
      <Button title="ClickMe2" 
        onPress={()=>{

          alert("Hello 1")
          alert("Hello 2")
          // console.log("55");
        }} 
      /> 
      <View
        style={{
          marginTop:24,
          marginLeft:30,
        }}
      >
        <Button title="ClickMe3" onPress={()=>alert("Hello")} />
      </View>

      <TouchableOpacity onPress={ ()=>alert("555") }
        activeOpacity={0.1}
        style={{
          marginTop:24,
          borderColor:"#f00",
          borderWidth:1,
          padding:24,
          borderRadius:5,
        }}
      >
        <Text>{BtnSubmitname}</Text>
      </TouchableOpacity>  

      <TouchableOpacity onPress={ ()=>alert("555") }
        activeOpacity={0.1}
        style={{
          marginTop:24,
          borderColor:"#f00",
          borderWidth:1,
          padding:24,
          borderRadius:5,
        }}
      >
        <Image resizeMode="stretch" source={require("./images/ryan-porter-FsdS1iiHbFk-unsplash.jpg")} 
          style={{
            width: 200,
            height: 200,
          }}
        />
      </TouchableOpacity>

    </View>
  )
}
