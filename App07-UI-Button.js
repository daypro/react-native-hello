import React from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  return (
    <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

      }}
    >
      <Text>Hello btn</Text>
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

    </View>
  )
}
