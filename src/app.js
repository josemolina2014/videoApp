import React, {Component} from 'react';
import {  
    Text,
    View,
    StyleSheet 
  } from 'react-native';
import {connect} from 'react-redux';

import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestions-list';
import API from './utils/api';
import CategoryList from './videos/containers/category-list';
import Player from './player/containers/player';

class AppLayout extends Component{

    async componentDidMount(){
        const categoryList= await API.getMovies();//llamado al API
        this.props.dispatch({ // se cargan los datos obtenidos del api en el storse (Session) para poder utilizarlos
          type: 'SET_CATEGORY_LIST',
          payload:{
            categoryList
          }
        });
    
        const suggestionList= await API.getSuggestion(10);//llamado al API
        this.props.dispatch({
          type : 'SET_SUGGESTION_LIST',
          payload: {
            suggestionList
          }
        });
    }

    render(){
        return (
            <Home>
            <Header/>  
            <Player/>        
            <Text>buscador</Text>          
            <CategoryList />
            <SuggestionList />       
          </Home>
        )
    }
}

export default connect(null)(AppLayout);