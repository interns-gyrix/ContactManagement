import React from "react";
import { View, Text } from "react-native";

export default class AboutUs extends React.Component {

    render() {
        return (
            <View>
                <View style={styles.baseTex}>
                    <Text>ABOUT US</Text>
                </View>
                <View style={styles.titleText} >
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
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});



