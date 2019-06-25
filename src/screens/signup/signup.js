import React from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";

export default class SignUp extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("Login")
        }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("Login")
            }}
            style={{ backgroundColor: "black" }}
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
          ></Button>
        </TouchableOpacity>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <Text>SignUp Scre dfsffen</Text>
      </View>
    );
  }
}