import React from 'react'
import { View, Text, Image } from 'react-native'

const viewStyle = {
  flex: 1,
  backgroundColor:"#ff0",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center"
  
};

export default function App() {
  return (
    // <View style={viewStyle} >
    <View style={{
      flex: 1,
      backgroundColor:"#ff0",
      flexDirection:"column",
    }} >
      <Text style={{ 
        backgroundColor:"#f00", 
        flex: 1,
        }} >daypro 1#</Text>
      <Text style={{ backgroundColor:"#f09", flex: 1, }} >daypro 2#</Text>
      <Text style={{ backgroundColor:"#983", flex: 1, }} >daypro 3#</Text>
      <Text style={{ backgroundColor:"#542", flex: 1, }} >daypro 4#</Text>

      <Image source={{uri: 'https://source.unsplash.com/random'}}
        style={{
          backgroundColor:"#fb5", 
          flex: 1,
          width: "100%",
          height: "100%",
          resizeMode: 'contain',
          
        }}
      />
      <Image resizeMode="stretch" source={require("./images/ryan-porter-FsdS1iiHbFk-unsplash.jpg")} 
        style={{
          flex: 1,
          width: null,
          // height: null,
        }}
      />

    </View>
  )
}
