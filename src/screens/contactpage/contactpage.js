import React from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
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
    filteredArray: [],
    searchText: "",
  }

  componentDidMount() {
    getContacts("aviral.pandey16@gmail.com")
      .then((response) => {
        this.setState({
          contacts: response,
          filteredArray: response
        })
      })
  }

  searchFunction = (text) => {
    if (text) {
      let filteredArray = this.state.contacts.filter((item) => {
        if (item.name.search(text) !== -1) return item
      })
      this.setState({
        filteredArray
      })
    } else {
      this.setState({
        filteredArray: this.state.contacts
      })
    }

  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#D3D3D3",
            width: "80%",
            padding: 5
          }}
        >
          <Image
            style={{ width: 25, height: 25, marginLeft: 15, marginRight: 5 }}
            source={require('../../../assets/blank.png')} />
          <TextInput
            placeholder="Search"
            onChangeText={(text) => { this.searchFunction(text) }}
          />
        </View>


        <View style={styles.container}>

          {this.state.contacts.length ?
            <FlatList
              data={this.state.filteredArray}
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

