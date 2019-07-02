import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { styles } from './contactpagestyles';

export default class FlatListBasics extends React.Component {

    static navigationOptions = ({ navigation }) =>{
        return {
        title: "CONTACTS",
        headerRight: (
            <View>

                <TouchableOpacity onPress={() => {
                                            navigation.navigate("AddContact")
                                        }}>
                     <Image source={require("./../../../assets/addc.png")}
                     style={{ marginTop: 20, marginBottom: 25, width: 60, height: 60, }} />
                </TouchableOpacity>

            </View>
        ),
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
    }
}
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'CONTACT1' },
                        { key: 'CONTACT2' },
                        { key: 'CONTACT3' },
                        { key: 'CONTACT4' },
                        { key: 'CONTACT5' },
                        { key: 'CONTACT6' },
                        { key: 'CONTACT7' },
                        { key: 'CONTACT8' },
                        { key: 'CONTACT9' },
                        { key: 'CONTACT10' },
                        { key: 'CONTACT11' },
                        { key: 'CONTACT12' },
                        { key: 'CONTACT13' },
                        { key: 'CONTACT14' },
                    ]}
                    renderItem={
                        ({ item }) => {
                            return (

                                <View style={styles.container}>



                                    <View>
                                        <Image
                                            style={{ width: 60, height: 50, marginLeft: 5, marginBottom: 10, marginTop: 10 }}
                                            source={require('../../../assets/blank.png')} />

                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate("Profile")
                                        }} key={item.key}>
                                            <Text style={styles.item}>{item.key}</Text>
                                        </TouchableOpacity>
                                    </View>


                                </View>
                            )
                        }

                    }
                />

            </View>
        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
//
