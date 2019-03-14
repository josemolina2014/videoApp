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
import Movie from './screens/containers/movie';

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
        if(this.props.selectedMovie){
            return <Movie />
        }
        return (            
         <Home>                        
            <Header/>
            <Text>buscador</Text>
            <CategoryList />
            <SuggestionList />
          </Home>
        )
    }
}
function mapStateToProps (state){
    return {
        selectedMovie: state.selectedMovie, //se obtiene el valor de selectedMovie del state y se crea una variable con el mismo nombre la cual estara disponible para su uso
    }
}

export default connect(mapStateToProps)(AppLayout); //se crea el vinculo con la session del localstorage a traves de connect(mapStateToProps)