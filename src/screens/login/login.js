import React from "react";
import { View, Text, Button, TouchableOpacity, TextInput, Modal, TouchableHighlight } from "react-native";
import { styles } from "./loginstyle";

export default class Login extends React.Component {

  state = {
    modalVisible: false,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "LOGIN",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      },
      headerRight: <Button
        onPress={() => navigation.openDrawer()}
        title="Info"
        color="#000"
      />
    }
  }

  triggerModal = () => {
    this.setState({
      modalVisible: true
    })
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

          this.props.navigation.navigate("FlatListBasics")

        }}>
          <Button
            onPress={() => {
              this.props.navigation.navigate("FlatListBasics")
            }}

            title="LOGIN"

            accessibilityLabel="Learn more about this purple button"
          ></Button>

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
    );
  }
}
