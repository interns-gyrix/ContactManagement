import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./login/login";
import Signup from "./signup/signup";
import AddContact from "./addc/AddContact";
import Utilities from "./utilities/utilities";
import FlatListBasics from "./contactpage/contactpage";

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup
  },
  Login: {
    screen: Login
  },
  AddContact: {
    screen: AddContact
  },
  FlatListBasics: {
    screen: FlatListBasics
  },
  Utilities: {
    screen: Utilities
  }
},
  {
    initialRouteName:"FlatListBasics"
  }
);

export default createAppContainer(AppNavigator);