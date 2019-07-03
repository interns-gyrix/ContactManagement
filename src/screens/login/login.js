import React from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, Modal, TouchableHighlight, Image, AsyncStorage } from "react-native";
import { styles } from "./loginstyle";
import { initialiseFirebase, signIn, getMyProfileData } from "./../../../util/firebaseManager";
export default class Login extends React.Component {

  state = {
    modalVisible: false,
    email: "rajatpillai2@gmail.com",
    password: "rajat0000",
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "LOGIN",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }

  triggerModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  componentDidMount() {
    getMyProfileData()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onLogin = () => {
    if (this.state.email && this.state.password) {
      console.log("TCL: onLogin -> this.state.password", this.state.password)
      console.log("TCL: onLogin -> this.state.email", this.state.email)
      signIn(this.state.email, this.state.password)
        .then((response) => {
          if (response.user.emailVerified) {
            console.log("TCL: onLogin -> response.user.emailVerified", response.user.emailVerified)
            return getMyProfileData(this.state.email)
          }
        })
        .then((response) => {
          console.log("Firestore Response ", response)
          AsyncStorage.setItem('email', this.state.email);
          this.props.navigation.navigate("FlatListBasics")
        })
        .catch((error) => {
          console.log("TCL: onLogin -> error", error)

        })
    } else {

    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={Platform.OS === 'android' ? 82 : 0} style={{ flex: 1 }} enabled>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} keyboardShouldPersistTaps='always' >
          <View style={styles.Container}>
            <View style={{ width: "100%", alignItems: "center", marginBottom: 50 }}>
              <Image resizeMode="contain" style={{ height: 150, width: 200 }}
                source={require('../../../assets/logo.png')} />
            </View>

            <TextInput
              style={styles.inputStyle}
              placeholder='USERNAME'
              placeholderTextColor="black"
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder='PASSWORD'
              value={this.state.password}
              placeholderTextColor="black"
              onChangeText={(text) => this.setState({ password: text })}
            />
            <TouchableOpacity onPress={() => {
              this.onLogin()
            }}
              style={{ marginTop: 15, backgroundColor: "blue", padding: 15, borderRadius: 10, alignItems: "center", justifyContent: 'center', margin: 30 }}
            >

              <Text style={{ color: "white" }}>
                Submit
            </Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setState({
                  modalVisible: false
                })
              }}>
              <View style={{ marginTop: 22 }}>
                <View>
                  <Text>Hello World!</Text>
                  <TouchableHighlight
                    onPress={() => {
                      this.setState({
                        modalVisible: false,
                      })
                    }}>
                    <Text>Hide Modal</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}