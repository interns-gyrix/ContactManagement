import { createStackNavigator, createAppContainer } from "react-navigation";
import login from "./login/login";
import Signup from "./signup/signup";
import Addcontact from "./addc/AddContact";
import contactpage from "./contactpage/contactpage";
import utilities from "./utilities/utilities";

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
},
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);