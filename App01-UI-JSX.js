import React from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  
  const message = 'dev';
  const textDetailStyle = {
    fontSize:18,
    color:'#fff'
  };
  const viewStyle = {
    backgroundColor:'#f00',
    flex: 1,
    // flexDirection: 'row',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  };

  return (
    <View style={viewStyle}>
      <Text style={textDetailStyle} >{message}</Text>
      <Text style={textDetailStyle} >{Math.random()}</Text>
      <Text style={textDetailStyle} >Hello daypro 55</Text>
      <Text style={textDetailStyle} >{true}</Text>
      <Button title="ClickMe" />
    </View>
  )
}
