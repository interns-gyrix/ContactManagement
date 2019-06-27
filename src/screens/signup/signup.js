import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "./signupstyles";


export default class SignUp extends React.Component {

  static navigationOptions = ({ navigate }) => ({
    header: null
  })

  render() {
    console.log(styles)
    return (
      <View style={styles.container}>
        <View style={styles.headbar}>
          <Text style={{ fontSize: 30, color: 'white' }}>SIGN UP</Text>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image resizeMode="contain" style={{ height: 150, width: 200 }} source={require('../../../assets/logo.png')} />
        </View>
        <View style={styles.mainbox}>
         
          <TextInput
            style={styles.inputStyles}
            placeholder="USERNAME"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
          />

          
          <TextInput
            style={styles.inputStyles}
            placeholder="PONENUMBER"
            placeholderTextColor="grey"
          />

          <TextInput
            style={styles.inputStyles}
            placeholder="PASSWORD"
            placeholderTextColor="grey"
          />

         <TextInput
            style={styles.inputStyles}
            placeholder="RE-ENTER PASSWORD"
            placeholderTextColor="grey"
          />
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("contactpage")
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