import React from "react";
import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./loginstyle";

export default class Login extends React.Component {
  
  static navigationOptions ={
    title: "LOGIN" ,
    headerTitleStyle: {
      textAlign:"center",
      flex:1
      
    },
  }

  render() {
    return (
      <View style={styles.Container}>
        <TextInput
          style={styles.inputStyle}
          placeholder='USERNAME'
          placeholderTextColor="black"
           />
        <TextInput
           style={styles.inputStyle}
           placeholder='PASSWORD'
           placeholderTextColor="black"
          />
        <TouchableOpacity style={styles.Button} onPress={() => {

          this.props.navigation.navigate("Login")

        }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Login")
            }}

            title="LOGIN"

            accessibilityLabel="Learn more about this purple button"
          ></Button>

        </TouchableOpacity>
           
          </View>
    );
  }
}
  
