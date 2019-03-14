import React, {Component} from 'react';
import { 
        FlatList,
        Text 
        } from "react-native";
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-sepatator';
import Suggestion from '../components/suggestion';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        list : state.suggestionList
    }

}
class SuggestionList extends Component {

    renderEmpty = () => <Empty text= "No hay sugerencias :("></Empty>
    itemSeparator = () => <Separator />
    viewMovie = (item) => {        
        this.props.dispatch({ //cargo en la session el valor de item como movie y se asocia a la propiedad SET_SELECTED_MOVIE
            type : 'SET_SELECTED_MOVIE',
            payload : {
                movie: item,
            }
        })
    }
    renderItem = ({item}) => {
        return (
            <Suggestion 
                {...item} 
                onPress = {() => {this.viewMovie(item)}} //se captura el evento onPress

            />
        )        
    }     
    keyExtractor = item => item.id.toString()    
    render(){
      
        return (      
            <Layout
                title ="Recomendado para ti"
            >
                <FlatList
                    keyExtractor = {this.keyExtractor} //se especifica quien es la llave primaria o key del arreglo
                    data = {this.props.list} //recibo la lista como parametro
                    ListEmptyComponent = {this.renderEmpty}
                    ItemSeparatorComponent = {this.itemSeparator}
                    renderItem = { this.renderItem }
                />            
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(SuggestionList);