import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeSscreen';
import ComponentsScreen from './screens/ComponentsScreen';
import ListScreen from './screens/ListScreen';
import ImageScreen from './screens/ImageScreen';
import Constants from 'expo-constants';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);
const AppContainer = createAppContainer(navigator);
export default AppContainer;
