import React from "react";
import { View, Text, Button, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "./../sidebar/sideBarStyle";
import { logout } from "../../../util/firebaseManager";
export default class Sidebar extends React.Component {

  onLogout = () => {
    logout()
      .then(() => {
        this.props.navigation.navigate('Login')
      })
      .catch(() => {
      })
  }

  render() {
    // console.log(this.props.navigation)
    return (
      <View style={styles.sideBar}>
        <View style={{ paddingTop: 50 }}>
          <Button
            onPress={() => this.props.navigation.closeDrawer()}
            title="Info"
            color="#000"
          />
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Login')
          }}>

            <Text >
              Login
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Signup')
          }}>

            <Text>
              Signup
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('AddContact')
          }}>

            <Text>
              Add Contact
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.onLogout()
          }}>

            <Text>
              Log out
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}