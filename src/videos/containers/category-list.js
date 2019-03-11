import React, {Component} from 'react';
import { 
    View,
    FlatList
 } from "react-native";
import Empty from '../components/empty';
import Separator from '../components/vertical-sepatator';
import Suggestion from '../components/suggestion';

 class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text= "No hay sugerencias :("></Empty>
    itemSeparator = () => <Separator> </Separator>
    renderItem = ({item}) => {
        return (
            <Suggestion {...item} />
        )        
    }
    render (){
        return (            
                <FlatList
                    horizontal
                    keyExtractor = {this.keyExtractor} //se especifica quien es la llave primaria o key del arreglo
                    data = {this.props.list} //recibo la lista como parametro
                    ListEmptyComponent = {this.renderEmpty}
                    ItemSeparatorComponent = {this.itemSeparator}
                    renderItem = { this.renderItem }
                /> 
        )
    }

 }

 export default CategoryList;
