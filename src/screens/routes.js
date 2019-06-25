import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./login/login";
import Signup from "./signup/signup";

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup
  },
  Login: {
    screen: Login
  },
},
  {
    initialRouteName: "Signup"
  }
);

export default createAppContainer(AppNavigator);