import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./filterStyles";

export default class Filter extends React.Component {
    
    static navigationOptions={
        title:"FILTER",
        headerTitleStyle:{
            textAlign:"center",
            flex:1
        },
    }
       
    render() {
        return (
            <View style={{ marginTop:50}}>
                <Text style={styles.text}>BLOOD GROUP</Text>
                <TextInput
                style={styles.text_Input}
                placeholder="Enter Blood Group"
                />
                <Text style={styles.text}>PROFESSION</Text>
                <TextInput
                style={styles.text_Input}
                placeholder="Enter Profession"
                 />
                
                <Text style={styles.text}>GENDER</Text>
                <Text style={styles.text}>DOB</Text>
                <Text style={styles.text}>ADDRESS</Text>
                <TextInput style={styles.text_address}
                placeholder="Enter Address"
                />
                
                <View style={styles.button_style}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={{ fontSize: 20,textAlign: "center",marginTop: 10}}>FIND</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            )
       }
    }  

 





































































































































































