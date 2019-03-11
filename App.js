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
  import Video from 'react-native-video';



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
      <Home>
        <Header/>  
        <View 
          style= {styles.playerBox}>
          <Video
            source = {{
              uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
            }}
            style = {styles.player}
            resizeMode = "contain"
          />
        </View>  
        
        <Text>buscador</Text>
        <Text>categorias</Text>
        <CategoryList
          list= {this.state.categoryList} //envio la lista de peliculas como parametro
        />
        <SuggestionList
          list= {this.state.sugestionList} //envio la lista de peliculas como parametro
        />       
      </Home>     
    );
  }
}

const styles = StyleSheet.create({
  player:{
    position: 'absolute',
    left:0,
    right:0,
    bottom:0,
    top:0,
  },
  playerBox :{
    flex: 1,
    height: 100,
  }
})

