import React from "react";
import { View, Text, Button, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "./../sidebar/sideBarStyle";
export default class Sidebar extends React.Component {

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
        </View>
      </View>
    );
  }
}