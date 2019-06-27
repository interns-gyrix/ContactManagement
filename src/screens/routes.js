import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./login/login";
import Signup from "./signup/signup";
import Addcontact from "./addc/AddContact";
import Utilities from "./utilities/utilities";
import Profile from "./profile/profile";
import FlatListBasics from "./contactpage/contactpage";

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup
  },
  Login: {
    screen: Login
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
  Utilities: {
    screen: Utilities
  }
},
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);