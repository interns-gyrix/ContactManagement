import { createStackNavigator, createAppContainer } from "react-navigation";
import Signup from "./signup/signup";
import Addcontact from "./addc/AddContact";
import Utilities from "./utilities/utilities";
import Profile from "./profile/profile";
import FlatListBasics from "./contactpage/contactpage";
import Login from "./login/login";

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup
  },
  Utilities: {
    screen: Utilities
  },
    contactpage: {
    screen: contactpage
  },
  Addcontact: {
    screen: Addcontact
  },
  Profile: {
    screen: Profile
  },
  FlatListBasics: {
    screen: FlatListBasics
  },
  Login: {
    screen: Login
  }
},
  {
    initialRouteName: "login"
  }
);

export default createAppContainer(AppNavigator);