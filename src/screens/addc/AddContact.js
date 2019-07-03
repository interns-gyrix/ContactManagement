import React from 'react';
import { StyleSheet, Text, Image, Button, TextInput, View, AsyncStorage } from 'react-native';
import { addContact } from "./../../../util/firebaseManager";

export default class AddContact extends React.Component {

  state = {
    name: '',
    number: '',
    email: '',
    address: '',
    bloodgroup: '',
    Dob: '',
    occup: ''
  }

  addContact = () => {
    let userEmail = "";
    AsyncStorage.getItem('email')
      .then((response) => {
        console.log("TCL: AddContact -> addContact -> response", response)
        userEmail = response
        let data = {
          name: this.state.name,
          number: this.state.number,
          email: this.state.email,
          address: this.state.address,
          bloodgroup: this.state.bloodgroup,
          Dob: this.state.Dob,
          occup: this.state.occup,
          userEmail: userEmail
        }
        addContact(data)
          .then((res) => {
            // console.log(res);
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
          <Image source={require("./../../../assets/addc.png")}
            style={{ marginTop: 20, marginBottom: 50, width: 100, height: 100, }} />
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
