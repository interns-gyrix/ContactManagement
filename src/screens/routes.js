import { createStackNavigator, createAppContainer } from "react-navigation";
import login from "./login/login";
import Signup from "./signup/signup";
import Addcontact from "./addc/AddContact";
import contactpage from "./contactpage/contactpage";
import utilities from "./utilities/utilities";
import Profile from "./profile/profile";

const AppNavigator = createStackNavigator({
  contactpage: {
    screen: contactpage
  },
  Addcontact: {
    screen: Addcontact
  },
  Signup: {
    screen: Signup
  },
  login: {
    screen: login
  },
  utilities: {
    screen: utilities
  },
  Profile : {
    screen: Profile
  }
},
  {
    initialRouteName: "login"
  }
);

export default createAppContainer(AppNavigator);