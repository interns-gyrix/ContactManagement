import React, { Component } from 'react';
import { styles } from "./profileStyle";
import {
  View,
  Text,
  Image,
}
  from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { updateContact } from "../../../util/firebaseManager";

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
    contactKey: ""
  }

  componentDidMount() {
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
      contactKey: details.contactKey
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
      contactKey: this.state.contactKey
    }
    updateContact(details)
  }

  render() {
    if (this.state.profileDetails) {
      return (
        <View style={styles.container} >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image style={{ width: 100, height: 100, marginLeft: 170, marginTop: 20, borderRadius: 300 / 3 }} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            </View>

          </View>
          <View style={{ marginLeft: 10, width: "100%", justifyContent: "center" }} >
            <Text style={{ fontSize: 15, color: "gray", marginTop: 30 }}>NAME: {this.state.profileDetails.name} </Text>
            <Text style={{ fontSize: 15, color: "gray", marginTop: 30 }}>E-MAIL:  {this.state.profileDetails.email}</Text>
            <Text style={{ fontSize: 15, color: "gray", marginTop: 30 }}>PHONE: {this.state.profileDetails.number} </Text>
            <Text style={{ fontSize: 15, color: "gray", marginTop: 30 }}>BLOOD GROUP: {this.state.profileDetails.bloodgroup}</Text>
            <Text style={{ fontSize: 15, color: "gray", marginTop: 30 }}>DATE OF BIRTH: {this.state.profileDetails.Dob}</Text>
            <Text style={{ fontSize: 15, color: "gray", marginTop: 30 }}>GENDER: </Text>
            <Text style={{ fontSize: 15, color: "gray", marginTop: 30 }}>PROFESSION: </Text>
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
          <TouchableOpacity onPress={() => this.updateProfile()}>
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return <View></View>
    }
  }
}
export default Profile;


