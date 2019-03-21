import {createStackNavigator, createAppContainer} from 'react-navigation'
import Loading from './sections/components/loading'


import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from  './sections/components/header';

const Main = createStackNavigator(
    {
        Home : Home,
        Movie : Movie,
        Category
    },
   {
    defaultNavigationOptions :{
           header: Header,
           gesturesEnabled:true,
           
           
       }
   }
)

export default createAppContainer(Main);