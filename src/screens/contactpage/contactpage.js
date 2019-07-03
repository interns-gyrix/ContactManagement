import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { styles } from './contactpagestyles';
import { getContacts } from "../../../util/firebaseManager";

export default class FlatListBasics extends React.Component {

  static navigationOptions = ({ navigation }) => {
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

  state = {
    contacts: [],
  }

  componentDidMount() {
    getContacts("aviral.pandey16@gmail.com")
      .then((response) => {
        console.log("TCL: FlatListBasics -> componentDidMount -> response", response)
        this.setState({
          contacts: response
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>

        {this.state.contacts.length ?
          <FlatList
            data={this.state.contacts}
            renderItem={
              ({ item }) => {
                return (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile", { item: item })}>
                    <View style={styles.container}>
                      <View>
                        <Image
                          style={{ width: 60, height: 50, marginLeft: 5, marginBottom: 10 }}
                          source={require('../../../assets/blank.png')} />
                      </View>
                      <View>
                        <Text>{item.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }

            }
          />

          : null

        }

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

