import React, {Component} from 'react';
import {
	TextInput,
	StyleSheet
} from 'react-native';
import {connect} from 'react-redux';

import API from '../../utils/api';
import { NavigationActions } from 'react-navigation';


class Search extends Component{
	state = {
		text : ''
	}

	handleSubmit = async () => {		
		const movies = await API.searchMovie(this.state.text);
		console.log(movies);
		/*carga en redux la informacion de la pelicula seleccionada, en este caso el primer resultado
		de la busqueda
		*/

		this.props.dispatch({ 
			type : 'SET_SELECTED_MOVIE',
			payload : {
				movie : movies[0]
			}
		});
		this.props.dispatch(
			NavigationActions.navigate({
				routeName: 'Movie' //nos redirigue a la pantalla de la pelicula
			})
		)

	}
	//evento que controla el texto digitado
	 handleChangeText = (text)	 => {	 	
	 	this.setState({
	 		text
	 	})
	 }

	render(){
		return (
			<TextInput 
				placeholder= "Busca tu pelicula favorita"
				autoCorrect= {false}
				autoCapitalize= "none"
				underlineColorAndroid= "transparent"
				onSubmitEditing = {this.handleSubmit}
				onChangeText = {this.handleChangeText}
				style = {styles.input}
			/>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		padding: 15,
		fontSize: 15,
		borderWidth: 1,
		borderColor: '#eaeaea',
	}
})

export default connect(null)(Search);

//null para no traer nada del store pero si sirve para colocar objetos en el store
