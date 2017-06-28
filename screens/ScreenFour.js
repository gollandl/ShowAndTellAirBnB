import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native';
import Navigator from 'native-navigation';
import { SCREENONE } from '../routes';
import Screen from '../components/Screen';

class ScreenFour extends  React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Smart Card number:12345678912345678</Text>
          <Image style ={styles.pic} source={require('../images/flame.png')}/>

          <Text style={styles.thank}>Thank you for your purchase</Text>

        <TouchableHighlight onPress={() => Navigator.push(SCREENONE)} style={styles.touch}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableHighlight>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
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
  text: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    balence:{
    //flex:1,
    flexDirection:'row',
    marginBottom:10,


    },

    cost:{
      marginTop:20,
    marginLeft:50,
    fontSize:25,
    color:'navy'

    },

    bold:{
    marginTop:30,
    marginRight:100,
    marginLeft:20,
    fontSize:20,
    color:'black',
    },
indent:{
  alignSelf:'flex-start',
  marginLeft:20,
},

pound:{
  fontSize:70,
  color:'navy',
  flexBasis:100,

},

amount:{
  fontSize:70,
  color:'black',

},

price:{
  color:'navy',
  fontSize:25,
  marginLeft:80,
},
thank:{
  marginTop:70,
  marginBottom:40,
  fontSize:40,
  color:'navy',
  justifyContent:'center',
  textAlign:'center',
  alignItems:'center',
},

pic:{
  height:220,
  width:220,
},

touch:{
  height:40,
  width:350,
  backgroundColor:'green',
  justifyContent:'center',
},
buttonText:{
  flex:1,
  color:'white',
  fontSize:25,
  fontWeight:"600",
  alignSelf:'center',
},



});
export default ScreenFour;
