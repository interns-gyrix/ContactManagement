import React from "react";
import { View, Text,StyleSheet } from "react-native";

export default class AboutUs extends React.Component {

    render() {
        return (
            <View>
                <View style={styles.baseText}>
                    <Text>ABOUT US</Text>
                </View>
                <View style={styles.titleText} >
                    <Text> SdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                    <Text> sdfdzfsFSDFsafaesfdfs </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    baseText: {
        width: "100%",
        alignItems: "center",
        marginBottom: 50,
        
    },
    titleText: {
        fontSize: 60,
        fontWeight: 'bold',
        alignItems: "center",
        width: "100%",
    }
});



