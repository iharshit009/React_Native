import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import MapUser from './screens/MapUser';

const MainNavigator = createStackNavigator({
  Login : {screen : Login},
  Home : {screen : Home},
  MapUser : {screen : MapUser} 
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor : '#f4511e',
    },
    headerTintColor : '#fff',
  }
});

const App = createAppContainer(MainNavigator);

export default App;
