import React, { Component } from 'react';
import { styles } from "./profileStyle";
import {
  View,
  Text,
  Image,
  Platform,
  Linking
}
  from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { updateContact, uploadImage } from "../../../util/firebaseManager";
import * as ImagePicker from 'expo-image-picker';
import { Permissions } from 'expo';
import Constants from "expo-constants"

class Profile extends Component {

  state = {
    profileDetails: {},
    name: "",
    email: "",
    number: "",
    bloodgroup: "",
    Dob: "",
    gender: "",
    occup: "",
    contactKey: "",
    image: "",
    address: "",
    profession: "",
    sector: ""
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  componentDidMount() {
    this.getPermissionAsync()
    const details = this.props.navigation.getParam("item")
    console.log("TCL: Profile -> componentDidMount -> details", details)
    this.setState({
      profileDetails: details,
      name: details.name,
      email: details.email,
      number: details.number,
      bloodgroup: details.bloodgroup,
      Dob: details.Dob,
      occup: details.occup,
      gender: "",
      contactKey: details.contactKey,
      image: details.image,
      address: details.address,
      profession: details.profession,
      sector: details.sector,
    })
  }

  updateProfile = () => {
    console.log("TCL: Profile -> updateProfile -> updateProfile", this.state)
    let details = {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      bloodgroup: this.state.bloodgroup,
      Dob: this.state.Dob,
      occup: this.state.occup,
      contactKey: this.state.contactKey,
      image: this.state.image,
      profession: this.state.profession,
      sector: this.state.sector,
    }
    updateContact(details)
      .then((res) => {
        this.props.navigation.navigate("FlatListBasics", { props: "props" })
      })
      .catch((error) => { })
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

  viewOnMap() {
    let address = this.state.address
    const replaced = address.split(' ').join('+');
    if (Platform.OS === 'android') {
      const URL = `https://www.google.com/maps/search/?api=1&query=${replaced}`
      Linking.canOpenURL(URL)
        .then(supported => {
          if (!supported) {
            // error handling
          } else {
            return Linking.openURL(URL)
          }
        })
        .catch(err => {
        });

    } else {
      const URL = `http://maps.apple.com/?q=${replaced}`
      Linking.canOpenURL(URL)
        .then(supported => {
          if (!supported) {
          } else {
            return Linking.openURL(URL)
          }
        })
        .catch(err => { });
    }
  }

  render() {
    if (this.state.profileDetails) {
      return (
        <View style={styles.container} >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => {
              this._pickImage()
            }}>
              <View>
                {
                  this.state.image ?
                    <Image key={new Date().getTime()} source={{ uri: this.state.image + '?' + new Date().getTime(), CACHE: 'reload' }}
                      style={{ width: 100, height: 100, marginLeft: 170, marginTop: 20, borderRadius: 300 / 3 }} />
                    :

                    <Image style={{ width: 100, height: 100, marginLeft: 170, marginTop: 20, borderRadius: 300 / 3 }} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                }
              </View>
            </TouchableOpacity>

          </View>
        
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>Email: </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} value={this.state.email} onChangeText={(text) => this.setState({ email: text })} placeholder={this.state.email} />
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>Ph. No. : </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} value={this.state.number} onChangeText={(text) => this.setState({ number: text })} placeholder={this.state.number} />
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>Blood Group: </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} value={this.state.bloodgroup} onChangeText={(text) => this.setState({ bloodgroup: text })} placeholder={this.state.bloodgroup} />
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>DOB: </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} value={this.state.Dob} onChangeText={(text) => this.setState({ Dob: text })} placeholder={this.state.Dob} />
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>Gender: </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} onChangeText={(text) => this.setState({ gender: text })} placeholder="male" />
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>Occupation: </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} value={this.state.occup} onChangeText={(text) => this.setState({ occup: text })} placeholder={this.state.occup} />
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>Address: </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} value={this.state.address} onChangeText={(text) => this.setState({ address: text })} placeholder={this.state.address} />
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>sector: </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} value={this.state.sector} onChangeText={(text) => this.setState({ sector: text })} placeholder={this.state.sector} />
            </View>
          </View>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ fontSize: 15, color: "gray", flex: 0.3 }}>profession: </Text>
            <View style={{ borderWidth: 1, borderColor: "#D3D3D3", marginLeft: 15, flex: 0.7 }}>
              <TextInput style={{ width: "80%" }} value={this.state.profession} onChangeText={(text) => this.setState({ profession: text })} placeholder={this.state.profession} />
            </View>
          </View>
          <TouchableOpacity onPress={() => this.updateProfile()}>
            <Text>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.viewOnMap()}>
            <Text>Get Direction on Map</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return <View></View>
    }
  }
}
export default Profile;


