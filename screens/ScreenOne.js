import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
} from 'react-native';
import Navigator, { TabBar, Tab } from 'native-navigation';
import Screen from '../components/Screen';
import { SCREENTWO } from '../routes';


export default class ScreenOne extends Component {

  render() {
    return (
      <Screen>
        <View style={styles.container}>


          <Text style={styles.welcome}>
            Screen One
          </Text>

          <Image style ={styles.pic} source={require('../images/bg.png')}/>

          <Text>Please login</Text>
          <TextInput style={styles.textInput} placeholder={'Username'} placeholderTextColor={"rgba(198,204,1)"}/>
          <TextInput style={styles.textInput} placeholder={'Password'} placeholderTextColor={"rgba(198,204,1)"}secureTextEntry ref={(input) => this.passwordInput = input}/>
          <Button
            title="Log in"
            onPress={() => Navigator.push(SCREENTWO)}
          />
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
  },


});
