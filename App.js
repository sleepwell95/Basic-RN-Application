import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeSscreen';
import ComponentsScreen from './screens/ComponentsScreen'; //! No need this one, if we find time we will implement it
import ListScreen from './screens/ListScreen';//! We dont need this also, if we have time
import ImageScreen from './screens/ImageScreen';
import Counter from './screens/CounterScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen, //! Jeigu rasim laiko įterpsim ir šį komponentą
    List: ListScreen,
    Image: ImageScreen,
    Counter:Counter
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
