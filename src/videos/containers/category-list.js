import React, {Component} from 'react';
import { 
    View,
    FlatList
 } from "react-native";
 import { NavigationActions } from 'react-navigation';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import {connect} from 'react-redux';


function mapStateToProps(state){
   // debugger

    return {
        list: state.videos.categoryList
    }
   
}
 class CategoryList extends Component {
    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text= "No hay sugerencias :("></Empty>
    itemSeparator = () => <Separator> </Separator>
    viewCategory =  (item) => {
        console.log('viewCategory');
        this.props.dispatch(            
            NavigationActions.navigate({
                routeName: 'Category',  // esta propiedad debe estar declarada en el createStackNavigator de app-navigator
                params :{
                    genre: item.genres[0]
                }
            })            
        );
    }
    renderItem = ({item}) => {
        return (
            <Category 
                {...item}
                // onPress={() => { this.viewCategory(item) }}
                onPress={() => {  console.log('onPress'); this.viewCategory(item) }}
            />
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

 export default connect(mapStateToProps)(CategoryList);
