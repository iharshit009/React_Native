import Home from './screens/home';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


const MainNavigator = createStackNavigator(
    {
      Home : {screen : Home},
      Add : {screen : AddNewContactScreen},
      View : {screen : ViewContactScreen},
      Edit : {screen : EditContactScreen},
    },
    {
      defaultNavigationOptions : {
        headerTintColor : "#fff",
        headerStyle : {
          backgroundColor : "#b83227"
        },
        headerTitleColor : {
          color: "#fff",
        }
      }
    }
  );

  const App = createAppContainer(MainNavigator);
  export default App;
