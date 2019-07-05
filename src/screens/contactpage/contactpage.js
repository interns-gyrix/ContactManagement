import React from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './contactpagestyles';
import { getContacts, checkUser } from "../../../util/firebaseManager";

let self = this;
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
    filterOption: null
  }

  componentDidMount() {
    checkUser()
      .then((response) => {
        getContacts(response.email)
          .then((response) => {
            this.setState({
              contacts: response,
              filteredArray: response
            })
          })
      })
      .catch(() => {
        this.props.navigation.navigate("Login")
      })
  }

  componentWillReceiveProps(props) {
    let object = props.navigation.getParam("item")
    console.log("TCL: componentWillReceiveProps -> object", object)
    let advanceFilterArray = this.state.contacts.filter((item) => {
      if (object.DOB === item.Dob) {
        return item;
      }
      console.log("TCL: componentWillReceiveProps -> object.sector === item.sector", object.sector === item.sector)
      if (object.sector === item.sector && !object.profession) {
        return item
      }
      if (object.sector === item.sector && object.profession === item.profession) {
        return item
      }
      if (object.bloodGroup == item.bloodgroup) {
        return item;
      }
      if (object.address && item.address.search(object.address) !== -1) {
        return item
      }


    })
    console.log("TCL: componentWillReceiveProps -> Object.keys(object).length == 0", Object.keys(object).length == 0)
    if (Object.keys(object).length == 0) {
      this.setState({
        filteredArray: this.state.contacts
      })
    } else {
      console.log("TCL: componentWillReceiveProps -> else")
      this.setState({
        filteredArray: advanceFilterArray
      })
    }
    console.log("TCL: componentWillReceiveProps -> advanceFilterArray", advanceFilterArray)

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

  renderItems() {
    return (
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
                        {item.image ?
                          <Image key={new Date().getTime()} source={{ uri: item.image + '?' + new Date().getTime(), CACHE: 'reload' }}
                            style={{ width: 60, height: 50, marginLeft: 5, marginBottom: 10 }} />
                          :

                          <Image
                            style={{ width: 60, height: 50, marginLeft: 5, marginBottom: 10 }}
                            source={require('../../../assets/blank.png')} />
                        }
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

  render() {
    console.log("TCL: render -> render", this.state.filteredArray)
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ width: "100%", flex: 0.9 }}>

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
          {this.renderItems()}
        </View>
        <View style={{ flex: 0.1, justifyContent: "flex-end", width: "80%" }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Filter")}
            style={{ width: "100%", backgroundColor: "red", padding: 15, alignItems: "center", marginBottom: 15 }}
          >
            <Text>filter</Text>
          </TouchableOpacity>
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

