import React, {Component} from 'react';
import {  
    Text,
    View,
    StyleSheet 
  } from 'react-native';

  import Home from './src/screens/containers/home';
  import Header from './src/sections/components/header';
  import SuggestionList from './src/videos/containers/suggestions-list';
  import API from './src/utils/api';
  import CategoryList from './src/videos/containers/category-list';
  import Player from './src/player/containers/player';
  import {Provider} from 'react-redux';
  import store from './store';


type Props = {};
export default class App extends Component<Props> {
  state = {
    // sugestionList: [],
    // categoryList: [],
  }
  async componentDidMount(){
    const categoryList= await API.getMovies();//llamado al API
    store.dispatch({ // se cargan los datos obtenidos del api en el store (Session) para poder utilizarlos
      type: 'SET_CATEGORY_LIST',
      payload:{
        categoryList
      }
    });

    const suggestionList= await API.getSuggestion(10);//llamado al API
    store.dispatch({
      type : 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });
  }

  render() {
    return (
    <Provider
      store ={store}
    >
       <Home>
          <Header/>  
          <Player/>        
          <Text>buscador</Text>          
          <CategoryList />
          <SuggestionList />       
        </Home>           
    </Provider>

     
    );
  }
}


