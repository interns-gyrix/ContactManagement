import React from 'react';
import { StyleSheet, Text, Image, Button, TextInput, View, AsyncStorage, Picker } from 'react-native';
import { addContact, uploadImage } from "./../../../util/firebaseManager";
import * as ImagePicker from 'expo-image-picker';
import { Permissions } from 'expo';
import Constants from "expo-constants"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddContact extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "ADD CONTACT",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,
        color: "#008080",
      },
    }
  }
  state = {
    name: '',
    number: '',
    email: '',
    address: '',
    bloodgroup: '',
    Dob: '',
    image: "",
    sector: '',
    profession: ""
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
          sector: this.state.sector,
          userEmail: userEmail,
          image: this.state.image,
          sector: this.state.sector,
          profession: this.state.profession
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
              <Image source={require("./../../../assets/addcontacticon.jpg")}
                style={{ marginTop: 20, marginBottom: 20, width: 100, height: 100, }} />
            }
          </TouchableOpacity>
        </View>

        <View style={styles.inputFieldContainer}>
          <View style={{ flex: 0.3 }}>
            <Text>Name</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <TextInput style={{ marginLeft: 20, marginTop: 5, borderRadius: 10, borderWidth: 0.5, width: "90%" }} placeholder='Enter Name'
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
          <View style={{ flex: 0.3 }}>
            <Text>Number</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <TextInput style={{ marginLeft: 20, marginTop: 5, borderRadius: 10, borderWidth: 0.5, width: "90%" }} placeholder='Enter Number'
              onChangeText={(text) => {
                this.setState({
                  number: text
                })
              }}

              value={this.state.number}
            />
          </View>
        </View>


        <View style={styles.inputFieldContainer}>
          <View style={{ flex: 0.3 }}>
            <Text>Email</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <TextInput style={{ marginLeft: 20, marginTop: 5, borderRadius: 10, borderWidth: 0.5, width: "90%" }} placeholder='Enter Email'
              onChangeText={(text) => {
                this.setState({
                  email: text
                })
              }}

              value={this.state.email}
            />
          </View>
        </View>

        <View style={styles.inputFieldContainer}>
          <View style={{ flex: 0.3 }}>
            <Text>Address</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <TextInput style={{ marginLeft: 20, marginTop: 5, borderRadius: 10, borderWidth: 0.5, width: "90%" }} placeholder='Enter Address'
              onChangeText={(text) => {
                this.setState({
                  address: text
                })
              }}

              value={this.state.address}
            />
          </View>
        </View>

        <View style={styles.inputFieldContainer}>
          <View style={{ flex: 0.3 }}>
            <Text>BloodGroup</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <TextInput style={{ marginLeft: 20, marginTop: 5, borderRadius: 10, borderWidth: 0.5, width: "90%" }} placeholder='Enter BloodGroup'
              onChangeText={(text) => {
                this.setState({
                  bloodgroup: text
                })
              }}

              value={this.state.bloodgroup}
            />
          </View>
        </View>

        <View style={styles.inputFieldContainer}>
          <View style={{ flex: 0.3 }}>
            <Text>D.O.B</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <TextInput style={{ marginLeft: 20, marginTop: 5, borderRadius: 10, borderWidth: 0.5, width: "90%" }} placeholder='Enter D.O.B'
              onChangeText={(text) => {
                this.setState({
                  Dob: text
                })
              }}

              value={this.state.Dob}
            />
          </View>
        </View>
        <View style={styles.inputFieldContainer}>
          <Text>Sector </Text>
          <Picker
            selectedValue={this.state.sector}
            style={{ height: 50, width: "100%" }}
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue !== "Select...") {
                this.setState({ sector: itemValue })
              }
            }}>
            <Picker.Item label="Select..." value="Select..." />
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
          </Picker>
        </View>
        {this.state.sector ?
          <View style={styles.inputFieldContainer}>
            <Text>Profession </Text>
            <TextInput style={{ marginLeft: 60, borderRadius: 10, borderWidth: 0.5 }} placeholder='Enter profession'
              onChangeText={(text) => {
                this.setState({
                  profession: text
                })
              }}
              value={this.state.profession}
            />
          </View>
          : null

        }



        <Button
          onPress={() => {
            this.addContact();
          }}
          title="ADD"
          color="#008080"
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
    marginBottom: 10,

  }
});
