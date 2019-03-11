import React, {Component} from 'react';
import { 
    View,
    FlatList
 } from "react-native";
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';

 class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text= "No hay sugerencias :("></Empty>
    itemSeparator = () => <Separator> </Separator>
    renderItem = ({item}) => {
        return (
            <Category {...item} />
        )        
    }
    render (){
        return (    
            <Layout
                title = "Categorias"
            >

                <FlatList
                    horizontal
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

 export default CategoryList;
