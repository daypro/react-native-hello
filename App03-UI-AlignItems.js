import React from 'react'
import { View, Text } from 'react-native'

const viewStyle = {
  flex: 1,
  backgroundColor:"#ff0",
  flexDirection:"column",
  alignItems:"center",
};

export default function App() {
  return (
    <View style={viewStyle} >
      <Text style={{ 
        backgroundColor:"#f00", 
        flex: 1, 
        width:100, 
        textAlign:"center",
        textAlignVertical:"center"
        }} >daypro 1#</Text>
      <Text style={{ backgroundColor:"#f09", height:50, }} >daypro 2#</Text>
      <Text style={{ backgroundColor:"#983", height:100, width:200 }} >daypro 3#</Text>
      <Text style={{ backgroundColor:"#542", height:"10%", width:"100%" }} >daypro 4#</Text>
    </View>
  )
}
