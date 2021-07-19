import React from 'react'
import { View, Text } from 'react-native'

export default function User(props) {

    const FullName=props.fname+" "+props.lname;

    return (
        <View>
            {/* <Text style={{textAlign:'center'}}>Hello {props.fname} {props.lname}</Text> */}
            <Text style={{textAlign:'center', fontSize:20, color:'blue'}}>Hello {FullName}</Text>
            <Text style={{textAlign:'center'}}>Welcome to React Native</Text>
        </View>
    )
}
