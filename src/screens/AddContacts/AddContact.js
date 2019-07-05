import React from 'react';
import { StyleSheet, Text, Image, Button, TextInput, View, AsyncStorage } from 'react-native';
import { addContact, uploadImage } from "./../../../util/firebaseManager";
import * as ImagePicker from 'expo-image-picker';
import { Permissions } from 'expo';
import Constants from "expo-constants"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddContact extends React.Component {

  state = {
    name: '',
    number: '',
    email: '',
    address: '',
    bloodgroup: '',
    Dob: '',
    occup: '',
    image: ""
  }

  componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
    });
    console.log("TCL: AddContact -> _pickImage -> result", result)
    this.convertImage(result.uri)
  }

  convertImage = async (uri) => {
    console.log("TCL: AddContact -> uploadImage -> uploadImage")
    const response = await fetch(uri);
    const blob = await response.blob();
    uploadImage(blob, this.state.email)
      .then((response) => {
        this.setState({
          image: response,
        })
      })
  }


  addContact = () => {
    let userEmail = "";
    AsyncStorage.getItem('email')
      .then((response) => {
        userEmail = response
        let data = {
          name: this.state.name,
          number: this.state.number,
          email: this.state.email,
          address: this.state.address,
          bloodgroup: this.state.bloodgroup,
          Dob: this.state.Dob,
          occup: this.state.occup,
          userEmail: userEmail,
          image: this.state.image
        }
        addContact(data)
          .then((res) => {
            this.props.navigation.navigate("FlatListBasics")
          })
          .catch((error) => {
            // console.log(error);
          })
      })

  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity onPress={() => {
            this._pickImage()
          }}>
            {this.state.image ?
              <Image source={{ uri: this.state.image + '?' + new Date().getDate() }}
                style={{ marginTop: 20, marginBottom: 50, width: 100, height: 100, }} />
              :
              <Image source={require("./../../../assets/addc.png")}
                style={{ marginTop: 20, marginBottom: 50, width: 100, height: 100, }} />
            }
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>

          <View style={styles.inputFieldContainer}>
            <Text>NAME</Text>
            <TextInput style={{ marginLeft: 110, borderRadius: 10, borderWidth: 0.5 }} placeholder='Enter Name'
              onChangeText={(text) => {
                this.setState({
                  name: text
                })
              }}

              value={this.state.name}
            />
          </View>
        </View>

        <View style={styles.inputFieldContainer}>
          <Text>NUMBER </Text>
          <TextInput style={{ marginLeft: 92, borderRadius: 10, borderWidth: 0.5 }} placeholder='Enter Number'
            onChangeText={(text) => {
              this.setState({
                number: text
              })
            }}
            value={this.state.number}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text>EMAIL </Text>
          <TextInput style={{ marginLeft: 107, borderRadius: 10, borderWidth: 0.5 }} placeholder='Enter Mail'
            onChangeText={(text) => {
              this.setState({
                email: text
              })
            }}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text>ADDRESS </Text>
          <TextInput style={{ marginLeft: 89, borderRadius: 10, borderWidth: 0.5 }} placeholder='Enter Address'
            onChangeText={(text) => {
              this.setState({
                address: text
              })
            }}
            value={this.state.address}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text>BLOOD-GROUP </Text>
          <TextInput style={{ marginLeft: 60, borderRadius: 10, borderWidth: 0.5 }} placeholder='Enter Blood Group'
            onChangeText={(text) => {
              this.setState({
                bloodgroup: text
              })
            }}
            value={this.state.bloodgroup}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text>D.O.B</Text>
          <TextInput style={{ marginLeft: 116, borderRadius: 10, borderWidth: 0.5 }} placeholder='Enter Date of Birth'
            onChangeText={(text) => {
              this.setState({
                Dob: text
              })
            }}
            value={this.state.Dob}
          />
        </View>

        <View style={styles.inputFieldContainer}>
          <Text>OCCUPATION </Text>
          <TextInput style={{ marginLeft: 68, borderRadius: 10, borderWidth: 0.5 }} placeholder='Enter Occupation'
            onChangeText={(text) => {
              this.setState({
                occup: text
              })
            }}
            value={this.state.occup}
          />
        </View>

        <Button
          //style={{width:50, borderRadius:10, borderWidth:0.5}}
          onPress={() => {
            this.addContact();
          }}
          title="ADD"
          color="#841584"
          accessibilityLabel="Save Contact"
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    width: "90%",
    alignSelf: "center"
  },


  inputFieldContainer: {
    flexDirection: 'row',
    marginBottom: 15,

  }
});
