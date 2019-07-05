import React from "react";
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import { styles } from "./filterStyles";
import DatePicker from 'react-native-datepicker';

export default class Filter extends React.Component {

  static navigationOptions = {
    title: "FILTER",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    },
  }

  state = {
    bloodGroup: "",
    sector: "",
    address: "",
    DOBFrom: "",
    DOBTo: "",
    profession: ""
  }

  onSubmit = () => {
    let details = {};

    if (this.state.bloodGroup && this.state.bloodGroup !== "Select...") {
      details.bloodGroup = this.state.bloodGroup;
    }

    if (this.state.sector && this.state.sector !== "Select...") {
      details.sector = this.state.sector;
    }

    if (this.state.address) {
      details.address = this.state.address;
    }

    if (this.state.sector) {
      details.sector = this.state.sector;
    }

    if (this.state.profession) {
      details.profession = this.state.profession;
    }
    this.props.navigation.navigate("FlatListBasics", { item: details })
  }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Text style={styles.text}>Blood Group</Text>
        <View style={{ borderWidth: 1, width: "90%", marginLeft: 10 }}>
          <Picker
            selectedValue={this.state.bloodGroup}
            style={{ height: 50, width: "100%" }}
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue !== "Select...") {
                this.setState({ bloodGroup: itemValue })
              }
            }}>
            <Picker.Item label="Select..." value="Select..." />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
          </Picker>
        </View>
        <Text style={styles.text}>Sector</Text>
        <View style={{ borderWidth: 1, width: "90%", marginLeft: 10 }}>
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
          <View>
            <Text style={styles.text}>Profession</Text>
            <TextInput style={styles.text_address}
              placeholder="Enter Profession"
              onChangeText={(text) => this.setState({ profession: text })}
              value={this.state.profession} />
          </View>
          : null
        }
        <Text style={styles.text}>Address</Text>
        <TextInput style={styles.text_address}
          placeholder="Enter Address"
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => this.setState({ address: text })}
          value={this.state.address} />
        <Text style={{ marginTop: 15 }}>DOB</Text>
        <View style={{ flexDirection: "row" }}>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ DOBFrom: date }) }}
          />
          <Text>-</Text>
          <DatePicker
            style={{ width: 200 }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ DOBTo: date }) }}
          />
        </View>
        <View
          style={styles.button_style}>
          <TouchableOpacity onPress={() => this.onSubmit()}>
            <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10, color: 'white' }}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}








































































































































































