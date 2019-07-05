import React from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "./landingstyle";
import { Ionicons } from '@expo/vector-icons';

export default class Landing extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    render() {
        return (
            <View style={styles.Container}>
                <TouchableOpacity style={{ flex: 1, width: "100%", alignItems: "flex-end", marginBottom: 50, marginTop: 20, marginRight: 30 }}
                    onPress={() => {
                        this.props.navigation.toggleDrawer()
                    }}>
                    <Ionicons name='md-menu' size={40} color='black' style={{ marginRight: 12, }} />
                </TouchableOpacity>
                <View style={{ flex: 9 }}>
                    <View style={{ width: "100%", alignItems: "center", marginBottom: 50 }}>
                        <Image resizeMode="contain" style={{ height: 150, width: 200 }}
                            source={require('../../../assets/logo.png')} />
                    </View>

                    <View style={styles.button_style}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("Login")
                        }}>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button_style}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("Signup")
                        }}>
                            <Text style={styles.text}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}