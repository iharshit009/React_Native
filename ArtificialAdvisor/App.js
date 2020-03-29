import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './components/Home';
import Login from './components/Login';
import AddScreen from './components/AddScreen';
import RemoveScreen from './components/RemoveScreen';
import ChatScr from './components/ChatScr';

const MainNavigator = createStackNavigator({
  Login : {screen : Login},
  Home : {screen : Home},
  AddScreen  : {screen : AddScreen},
  RemoveScreen : {screen : RemoveScreen},
  ChatScr : {screen : ChatScr},
},{
  defaultNavigationOptions : {
    headerTintColor : '#fff',
    headerStyle : {
      backgroundColor : '#000'
    },
  }
})

const App = createAppContainer(MainNavigator);

export default App;