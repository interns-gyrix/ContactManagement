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
        bloodGroup: "",
        sector: "",
        address: "",
        DOB: ""
    }

    onSubmit = () => {
        // this.props.navigation.navigate("FlatListBasics", { item: this.state })
    }

    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <Text style={styles.text}>Blood Group</Text>
                <View style={{ borderWidth: 1, width: "90%", marginLeft: 10 }}>
                    <Picker
                        selectedValue={this.state.bloodGroup}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ bloodGroup: itemValue })
                        }>
                        <Picker.Item label="O+" value="O+" />
                        <Picker.Item label="O-" value="O-" />
                        <Picker.Item label="A-" value="A-" />
                        <Picker.Item label="A+" value="A+" />
                        <Picker.Item label="B+" value="B+" />
                        <Picker.Item label="B-" value="B-" />
                        <Picker.Item label="AB+" value="AB" />
                        <Picker.Item label="AB-" value="AB-" />

                    </Picker>
                </View>
                <Text style={styles.text}>Sector</Text>
                <View style={{ borderWidth: 1, width: "90%", marginLeft: 10 }}>
                    <Picker
                        selectedValue={this.state.sector}
                        style={{ height: 50, width: "100%" }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ sector: itemValue })
                        }>
                        <Picker.Item label="Medical" value="Medical" />
                        <Picker.Item label="Hospitality" value="Hospitality" />
                        <Picker.Item label="Business" value="Busines" />
                        <Picker.Item label="Emergency" value="Emergency" />
                        <Picker.Item label="Others" value="Others" />
                    </Picker>
                </View>
                <Text style={styles.text}>Address</Text>
                <TextInput style={styles.text_address}
                    placeholder="Enter Address"
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({ address: text })}
                    value={this.state.address} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.text}>DOB</Text>
                    <TextInput
                        style={{
                            width: "32%", marginLeft: 30, borderWidth: 1, borderRightWidth: 1,
                            borderLeftWidth: 1, borderColor: 'black', paddingLeft: 10, marginTop: 10
                        }}
                        placeholder="From"
                    />
                    <TextInput style={{
                        width: "31%", marginLeft: 20, borderWidth: 1, borderRightWidth: 1,
                        borderLeftWidth: 1, borderColor: 'black', paddingLeft: 10, marginTop: 10
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








































































































































































