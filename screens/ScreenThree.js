import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import Navigator from 'native-navigation';
import { SCREENFOUR } from '../routes';
import {SCREENTWO} from '../routes';
import Screen from '../components/Screen';

 class ScreenThree extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Smart Card number:12345678912345678</Text>

        <Text style={styles.list}> Recent transactions</Text>
        <Text style={styles.subheading}>This years amounts:</Text>
        <View syle={styles.transactions}>
          <Text style={styles.transactions}>19 Jan    2017                    £22.00</Text>
          <Text style={styles.transactions}>30 Feb   2017                    £19.50</Text>
          <Text style={styles.transactions}>15 Mrch 2017                    £17.25</Text>
          <Text style={styles.transactions}>03 Apl   2017                    £25.99</Text>
          <Text style={styles.transactions}>28 Apl   2017                    £17.56</Text>
        </View>
        <TouchableHighlight onPress={() => Navigator.push(SCREENTWO)} style={styles.touch}>
          <Text style={styles.buttonText}>Top up</Text>
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
list:{
  marginLeft:30,
  fontSize:20,
  color:'navy',
  alignSelf:'flex-start',

},

transactions:{

  marginLeft:20,
  marginBottom:10,

},
subheading:{
  fontSize:15,
  marginBottom:10,
  marginLeft:30,
  alignSelf:'flex-start',
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
export default ScreenThree;
