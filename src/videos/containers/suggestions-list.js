import React, {Component} from 'react';
import { 
        FlatList,
        Text 
        } from "react-native";
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-sepatator';

class SuggestionList extends Component {

    renderEmpty = () => <Empty text= "No hay sugerencias :("></Empty>
    itemSeparator = () => <Separator> </Separator>

    render(){
        const list = [
            {
                title:  'Avengers',
                key: '1'
            },
            {
                title: 'Pokemon',
                key: '2'
            },
            {
                title: 'Roma',
                key: '3'
            }
    ]
        return (      
            <Layout
                title ="Recomendado para ti"
            >
                <FlatList
                    data = {list}
                    ListEmptyComponent = {this.renderEmpty}
                    ItemSeparatorComponent = {this.itemSeparator}
                    renderItem = { ({item}) => <Text>{item.title}</Text> }
                />            
            </Layout>
        )
    }
}

export default SuggestionList;