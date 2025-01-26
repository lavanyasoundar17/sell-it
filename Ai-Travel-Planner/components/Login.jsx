import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

export default function Login() {
  return (
    <View style={{ flex: 1 }}>
          <Image source={require('./../assets/images/login.jpg')}
              style={{ width: '100%', height: 520 }}
              resizeMode="cover"
          />
          <View style={styles.container}>
              <Text style={{fontFamily:'outfit-bold',fontSize:30,textAlign:'center'}}>AI Travel Planner</Text>
          
              <Text style={{ fontFamily: 'outfit-medium', fontSize: 17, textAlign: 'center', color: Colors.GREY }}>Welcome to AI travel planner</Text>
              <View style={styles.button}>
                  <Text style={{color: Colors.WHITE,textAlign:'center', fontFamily:'outfit-bold'}}>Sign In With Google</Text>
              </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: 20,
        height: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: '20%',
        alignSelf: 'center'
        
    }
})