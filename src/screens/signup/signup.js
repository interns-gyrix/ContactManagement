import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./signupstyles";
import icon from 'react-native-vector-icons/Ionicons'


export default class SignUp extends React.Component {
  static navigationOptions = ({ navigate }) => ({
    header : null
  })
    


  render() {
    console.log(styles)
    return (
      <View style={styles.container}>
        <View style={styles.headbar}>
          <Text style={{fontSize:30,color:'white'}}>SIGN UP</Text>
        </View>
        <View style={styles.mainbox}>
          <TextInput
            style={styles.inputStyles}
            placeholder="Username"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
          />

          <TextInput
            style={styles.inputStyles}
            placeholder="Username"
            placeholderTextColor="grey"
          />

          <TextInput
            style={styles.inputStyles}
            placeholder="Username"
            placeholderTextColor="grey"
          />

          <TextInput
            style={styles.inputStyles}
            placeholder="Username"
            placeholderTextColor="grey"
          />
          <View style={{width: "100%", alignItems: "center"}}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("Login")
            }}
              style={{ marginTop: 15, width: "85%", backgroundColor: "blue", padding: 15, borderRadius: 10, alignItems: "center" }}
            >

              <Text style={{ color: "white" }}>
                Submit
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>all rigths are reserved to gyrix</Text>
        </View>
      </View>
    );
  }
}