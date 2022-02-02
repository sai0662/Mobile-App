import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import FormHeader from './screens/Pages/FormHeader';
import FormSelectorBtn from './screens/Pages/FormSelectorBtn';


export default function App(){
  return (
    <View style={{flex:1,paddingTop:60}}> 
    <View style={{height:80}}>
      <FormHeader heading='Welcome'/>
    </View>
    <View style={{flexDirection:'row',paddingHorizontal:20}}>
      <FormSelectorBtn style={styles.borderleft} backgroundColor='rgba(27,27,54,1)' title='Login'/>
      <FormSelectorBtn style={styles.borderright} backgroundColor='rgba(27,27,54,0.4)' title='Sign Up'/>
    </View>
    <ScrollView>
      
    </ScrollView>
    </View>
  );
}
    
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center',
      },
     borderleft:{
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
     },
     borderright:{
      borderTopRightRadius:8,
      borderBottomRightRadius:8,
     }
})