import {createStackNavigator, createAppContainer} from 'react-navigation'
import Loading from './sections/components/loading'


import Home from './screens/containers/home';
import Movie from './screens/containers/movie';

const Main = createStackNavigator(
    {
        Home : Home,
        Movie : Movie
    },
   
)

export default createAppContainer(Main);