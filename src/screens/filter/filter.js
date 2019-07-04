import React from "react";
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";
import { styles } from "./filterStyles";

export default class Filter extends React.Component {

  static navigationOptions = {
    title: "FILTER",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    },
  }

  state = {
    language: ""
  }

  onSubmit = () => {
    // this.props.navigation.navigate("FlatListBasics", { item: this.state })
  }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Text style={styles.text}>Blood Group</Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <TextInput
          style={styles.text_Input}
          placeholder="Enter Blood Group"
        />
        <Text style={styles.text}>Sector</Text>
        <TextInput
          style={styles.text_Input}
          placeholder="Enter Profession"
        />
        <Text style={styles.text}>Address</Text>
        <TextInput style={styles.text_address}
          placeholder="Enter Address"
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>DOB</Text>
          <TextInput style={{
            width: 50, marginLeft: 30, borderWidth: 2, borderRightWidth: 2,
            borderLeftWidth: 2, borderColor: 'grey', paddingLeft: 10, marginTop: 10
          }}
            placeholder="From"
          />
          <TextInput style={{
            width: 50, marginLeft: 30, borderWidth: 2, borderRightWidth: 2,
            borderLeftWidth: 2, borderColor: 'grey', paddingLeft: 10, marginTop: 10
          }}
            placeholder="To"
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








































































































































































