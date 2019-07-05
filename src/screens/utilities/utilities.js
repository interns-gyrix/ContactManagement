import React from "react";
import { View, Text,TouchableOpacity,Button } from "react-native";
import { styles } from "./utilitiesstyles";

export default class Utilities extends React.Component {
    static navigationOptions={
        title:"UTILITIES",
        headerTitleStyle:{
            textAlign:"center",
            flex:1
        },
    }
       
    render() {
        return (
            <View>
                <View style={styles.button_style}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={styles.text}>HOSPITAL</Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.button_style}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={styles.text}>POLICE</Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.button_style}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={styles.text}>HOTEL</Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.button_style}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={styles.text}>PARK</Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.button_style}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={styles.text}>GROCERY</Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.button_style}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style={styles.text}>SALON</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }

}


