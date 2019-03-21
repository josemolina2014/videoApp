import React, {Component, Fragment} from 'react';
import {  
    Text,
    View,
    StyleSheet 
  } from 'react-native';
import {connect} from 'react-redux';

import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestions-list';
import API from '../../utils/api';
import CategoryList from '../../videos/containers/category-list';
import Movie from '../../screens/containers/movie';
import Search from '../../sections/containers/search';

class Home extends Component{

    static navigationOptions = () =>{
        return {
            header: Header
        }
    }

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
         <Fragment>
            <Search />
            <CategoryList />
            <SuggestionList />
          </Fragment>
        )
    }
}


export default connect(null)(Home); //se crea el vinculo con la session del localstorage a traves de connect(mapStateToProps)