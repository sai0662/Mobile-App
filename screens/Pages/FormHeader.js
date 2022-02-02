import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function FormHeader({heading}){
  return (
    <>
      <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        color:'#1b1b33',
        alignContent:'center',
    }
})
