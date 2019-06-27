import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { styles } from './contactpagestyles';

export default class FlatListBasics extends React.Component {
   
    static navigationOptions = {
        title: "CONTACTS",
        headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
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
                                        style={{ width: 60, height: 50, marginLeft: 5, marginBottom: 10 }}
                                        source={require('../../../assets/blank.png')}/>

                                  </View>
                                  <View key = {item.key}>
                                    <Text style={styles.item}>{item.key}</Text>
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
