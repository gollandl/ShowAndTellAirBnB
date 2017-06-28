import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Navigator, { TabBar, Tab } from 'native-navigation';
import Screen from '../components/Screen';
import { SCREENTWO } from '../routes';


export default class ScreenOne extends Component {

  render() {
    return (
      <Screen>
        <View style={styles.container}>

          <Image style ={styles.pic} source={require('../images/bg.png')}/>

          <Text>Please login</Text>
          <TextInput style={styles.textInput} placeholder={'Username'} placeholderTextColor={"rgba(198,204,1)"}/>
          <TextInput style={styles.textInput} placeholder={'Password'} placeholderTextColor={"rgba(198,204,1)"}secureTextEntry ref={(input) => this.passwordInput = input}/>

          <TouchableHighlight onPress={() => Navigator.push(SCREENTWO)} style={styles.touch}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>


        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  pic:{

  },
textInput:{
  justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 65,
        height: 20,
        width: 250,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.5)"
},

pic: {
    flexGrow:1,
    width:380,
    height:150,
    alignSelf:'center',
    flexBasis:'27%',
    marginBottom:50,
    marginLeft:10,
    marginTop:100,
  },

  touch:{
    height:30,
    width:200,
    backgroundColor:'green',
    justifyContent:'center',
    marginTop:20,
  },
  buttonText:{
    flex:1,
    color:'white',
    fontSize:15,
    fontWeight:"600",
    alignSelf:'center',
  },





});
