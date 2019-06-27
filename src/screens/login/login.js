import React from "react";
import { View, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./loginstyle";

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  render() {
    return (
      <View style={styles.Container}>
       <Text style={{marginBottom: 30, marginLeft: 100,fontWeight: 'bold',fontSize: 30, color: 'blue'}}>LOGIN PAGE </Text>
    
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
              this.props.navigation.navigate("login")
              
            }}

            title="login"

            
            accessibilityLabel="Learn more about this purple button"
          ></Button>
          </TouchableOpacity>
          <Text style={{marginBottom: 30, marginLeft: 100,fontWeight: 'bold',fontSize: 30, color: 'blue'}}>signup</Text>
      </View>
    );
  }
}
  
