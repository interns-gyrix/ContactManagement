import React from "react";
import { View, Text, Button,  TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "./../sidebar/sideBarStyle";


export default class Sidebar extends React.Component {

  render() {
    // console.log(this.props.navigation)
    return (
      <View style={styles.sideBar}>
          <View style={{paddingTop: 50}}>
          <Button
        onPress={() => this.props.navigation.closeDrawer()}
        title="Info"
        color="#000"
      />
              <Text >
              Login
          </Text>
          <Text>
              Profile
          </Text>
      </View>
              </View>
    );
  }
}