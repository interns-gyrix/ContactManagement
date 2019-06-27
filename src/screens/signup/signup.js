import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./signupstyles";
import Icon from 'react-native-vector-icons/Ionicons'


export default class SignUp extends React.Component {
  
  static navigationOptions = ({ navigate }) => ({
    header : null
  })

  render() {
    console.log(styles)
    return (
      <View style={styles.container}>
        <View style={styles.headbar}>
          <Text style={{fontSize:30,color:'white'}}>SIGN UP</Text>
        </View>
        <View style={styles.mainbox}>
          <Icon name={'ios-person'} size={28} color={'blue'} style={{top:10, position:'absolute'}} />
          
          <TextInput
            style={styles.inputStyles}
            placeholder="USERNAME"
            placeholderTextColor="grey"
            underlineColorAndroid="transparent"
          />

          <Icon name={'ios-call'} size={28} color={'blue'} style={{top:27, position:'absolute'}}/>
          
          <TextInput
            style={styles.inputStyles}
            placeholder="PONENUMBER"
            placeholderTextColor="grey"
          />

          <Icon name={'ios-lock'} size={28} color={'blue'} style={{top:50, position:'absolute'}}/>
          <TextInput
            style={styles.inputStyles}
            placeholder="PASSWORD"
            placeholderTextColor="grey"
          />

          <Icon name={'ios-lock'} size={28} color={'blue'} style={{top:70, position:'absolute'}}/>

          <TextInput
            style={styles.inputStyles}
            placeholder="RE-ENTER PASSWORD"
            placeholderTextColor="grey"
          />
          <View style={{width: "100%", alignItems: "center"}}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("contactpage")
            }}
              style={{ marginTop: 15, width: "85%", backgroundColor: "blue", padding: 15, borderRadius: 10, alignItems: "center" }}
            >

              <Text style={{ color: "white" }}>
                Submit
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Text>all rigths are reserved to gyrix</Text>
        </View>
      </View>
    );
  }
}