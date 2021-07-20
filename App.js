import React from 'react'
import { View, Text, Button, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'

import User from './components/user/User';

export default function App() {

  const BtnSubmitName = "Change RGB";
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [rgb, setRgb] = useState([0,0,0]);
 
  useEffect(() => {
    const rgbElem = rgb;
    console.log(rgbElem);
    return () => {
      console.log("return RGB Color");
    }
  })
 
  return (
    <ScrollView>
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




        {/* test useEffect */}
        <Text style={{paddingTop:20}}>{rgb.join(', ')}</Text>
        <TouchableOpacity 

          onPress={ ()=>{
            setRgb(rgb.map(()=>{
              return Math.floor(Math.random()*256);
            })) 
          }}
          
          activeOpacity={0.1}
          style={{
            marginTop:24,
            borderColor:"#f00",
            borderWidth:1,
            padding:24,
            borderRadius:5,
          }}
        >
          <Text>{BtnSubmitName}</Text>
        </TouchableOpacity>  
        {/* end test useEffect */}



        {/* test useState */}        
        <TextInput 
          style={{
            height:40,
            
          }}
          placeholder="type here !!"
          onChangeText={text => setText(text)}
          // defaultValue={text}
          ></TextInput>

        <Text>{text}</Text>

        <TextInput 
          style={{
            height:40,
            
          }}
          placeholder="type here !!"
          onChangeText={name => setName(name)}
          // defaultValue={text}
          ></TextInput>

        <Text>{name}</Text>
        {/* end test useState */}





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


        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Text>    

      </View>
    </ScrollView>
  )
}
