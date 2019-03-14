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
    itemSeparator = () => <Separator> </Separator>
    renderItem = ({item}) => {
        return (
            <Suggestion {...item} />
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