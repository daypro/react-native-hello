import React from 'react'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{
        backgroundColor:'#f00',
        flex: 1,
        // flexDirection: 'row',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text style={{ color:'#fff' }} >Hello daypro 55</Text>
      <Text style={{ color:'#fff' }} >Hello daypro 55</Text>
      <Text style={{ color:'#fff' }} >Hello daypro 55</Text>
    </View>
  )
}
