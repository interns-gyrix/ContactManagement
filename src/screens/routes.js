import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./login/login";
import Signup from "./signup/signup";
import AddContact from "./addc/AddContact";

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup
  },
  Login: {
    screen: Login
  },
  AddContact: {
    screen: AddContact
  }
},
  {
    initialRouteName: "AddContact"
  }
);

export default createAppContainer(AppNavigator);