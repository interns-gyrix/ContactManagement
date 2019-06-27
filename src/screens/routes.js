import { createStackNavigator, createAppContainer } from "react-navigation";
import login from "./login/login";
import Signup from "./signup/signup";
import Addcontact from "./addc/AddContact";
import contactpage from "./contactpage/contactpage";



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
  initialRouteName: "Addcontact"
},
);

export default createAppContainer(AppNavigator);