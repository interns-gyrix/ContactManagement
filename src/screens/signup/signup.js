import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, AsyncStorage, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { styles } from "./signupstyles";
import { signUp, sendVerificationEmail, setMyProfile } from "../../../util/firebaseManager"

export default class SignUp extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Sign Up",
      headerTitleStyle: {
        textAlign: "center",
        width:'85%',
        flex: 1, 
        marginRight:50
      }
    }
  }

  state = {
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  }

  onSubmit = () => {
    if (this.state.email && this.state.password) {
      console.log("TCL: onSubmit -> this.state.email", this.state.email)
      signUp({ email: this.state.email, password: this.state.password })
        .then((response) => {
          console.log("TCL: onSubmit -> response", response)
          return sendVerificationEmail(response)
        })
        .then((res) => {
          console.log("res", res);
          return setMyProfile({ mobileNumber: this.state.phoneNumber, email: this.state.email })
        })
        .then((res) => {
          console.log("FIRESTORE RES", res)
          AsyncStorage.setItem('email', this.state.email);
          this.props.navigation.navigate("FlatListBasics")
        })
        .catch((error) => {
          console.log("TCL: onSubmit -> error", error)

        })
    } else {
      console.log("TCL: onSubmit -> this.state.email bhaiya galat hai")

    }

    // 
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS === 'android' ? 82 : 0} style={{ flex: 1 }} enabled>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} keyboardShouldPersistTaps='always' >
      <View style={styles.container}>
        {/* <View style={styles.headbar}>
          <Text style={{ fontSize: 30, color: 'white' }}>SIGN UP</Text>
        </View> */}
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image resizeMode="contain" style={{ height: 150, width: 200 }} source={require('../../../assets/logo.png')} />
        </View>
        <View style={styles.mainbox}>

          <TextInput
            style={styles.inputStyles}
            placeholder="Email"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ email: text })}
          />


          <TextInput
            style={styles.inputStyles}
            placeholder="Phone Number"
            placeholderTextColor="grey"
            onChangeText={(text) => this.setState({ phoneNumber: text })}
          />

          <TextInput
            style={styles.inputStyles}
            placeholder="Password"
            placeholderTextColor="grey"
            onChangeText={(text) => this.setState({ password: text })}
          />

          <TextInput
            style={styles.inputStyles}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            onChangeText={(text) => this.setState({ confirmPassword: text })}
          />
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity onPress={() => {
              this.onSubmit()
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
          <Text>All rights are reserved to gyrix</Text>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}