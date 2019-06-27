import React from 'react';
import { StyleSheet, Text, Image, Button, onPressLearnMore, accessibilityLabel, TouchableOpacity, TextInput, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

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
                console.log("State", this.state.name)
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
              console.log("State", this.state.number)
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
              console.log("State", this.state.email)
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
              console.log("State", this.state.address)
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
              console.log("State", this.state.bloodgroup)
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
              console.log("State", this.state.Dob)
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
              console.log("State", this.state.occup)
            }}
            value={this.state.occup}
          />
        </View>

        <Button
          //style={{width:50, borderRadius:10, borderWidth:0.5}}
          //onPress={onPressLearnMore}
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
