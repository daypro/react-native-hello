import React from 'react'
import { View, Text } from 'react-native'

const viewStyle = {
  flex: 1,
  backgroundColor:"#ff0",
  flexDirection:"column",
  alignItems:"stretch",
};

export default function App() {
  return (
    <View style={viewStyle} >
      <Text style={{ backgroundColor:"#f00", flex: 1, }} >daypro 1#</Text>
      <Text style={{ backgroundColor:"#f09", flex: 1, }} >daypro 2#</Text>
      <Text style={{ backgroundColor:"#983", flex: 1, }} >daypro 3#</Text>
      <Text style={{ backgroundColor:"#542", flex: 1, }} >daypro 4#</Text>
    </View>
  )
}
