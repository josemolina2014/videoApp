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
    sugestionList: [],
    categoryList: [],
  }
  async componentDidMount(){
    const movies= await API.getSuggestion(10);//llamado al API
    const categories= await API.getMovies();//llamado al API
    console.log(movies);
    console.log(categories);
    this.setState({
      sugestionList : movies, //se carga los datos obtenidos del API y se suben al estado para poder enviarla como props
      categoryList : categories,
    })
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
          <Text>categorias</Text>
          <CategoryList
            list= {this.state.categoryList} //envio la lista de peliculas como parametro
          />
          <SuggestionList
            list= {this.state.sugestionList} //envio la lista de peliculas como parametro
          />       
        </Home>           
    </Provider>

     
    );
  }
}


