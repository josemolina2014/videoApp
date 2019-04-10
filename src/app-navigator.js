import React from 'react';

import {
    createStackNavigator, 
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation'



import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from  './sections/components/header';
import About from './screens/containers/about';
import Lucky from './screens/containers/luky';
import Profile from './screens/containers/profile';
import Login from './screens/containers/login'
import Loading from './screens/containers/loading';
import Icon from './sections/components/icon';

const Main = createStackNavigator(
    {
        Home : Home,       
        Category
    },
   {
        defaultNavigationOptions :{
           header: Header,          
       },
       cardStyle: {
        backgroundColor: 'white',
       }      
   }
)

const TabNavigator = createBottomTabNavigator (
    {
        Home: {
            screen: Main,
            navigationOptions:{
                title : 'Inicio',
                tabBarIcon : <Icon  icon="🏠"/>
            }
        },
        About:{
            screen: About,             
        },
        Lucky:{
            screen : Lucky,
        },
        Profile:{
            screen: Profile,
        }

    },
    {
        tabBarOptions:{
            activeTintColor: 'white',
            activeBackgroundColor: '#65a721',
        }

    }
)

const WithModal =  createStackNavigator(
    {
        Main:{
            screen: TabNavigator,
            navigationOptions : {
                header: null
            }
        },
        Movie : Movie,
    },
    {
        mode: 'modal',
        //headerMode: 'none',
        cardStyle: {
            backgroundColor: 'white',
        },
        defaultNavigationOptions: {
            gesturesEnabled: true
        }
    }
)

const SwitchNavigator  = createSwitchNavigator(
    {
       App: WithModal,
       Loading: Loading,
       Login: Login,
    },
    {
        initialRouteName: 'Loading'
    }
)



export default createAppContainer(SwitchNavigator);