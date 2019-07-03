import React, { Component } from 'react';
import { styles } from "./profileStyle";
import {
  View,
  Text,
  Image,
}
  from "react-native";
import { TextInput } from 'react-native-gesture-handler';

class Profile extends Component {

  state = {
    profileDetails: {}
  }

  componentDidMount() {
    this.setState({
      profileDetails: this.props.navigation.getParam("item")
    })
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

        </View>
      )
    } else {
      return <View></View>
    }
  }
}
export default Profile;


