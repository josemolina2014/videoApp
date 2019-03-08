import React, {Component} from 'react';
import { 
        FlatList,
        Text 
        } from "react-native";
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-sepatator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {

    renderEmpty = () => <Empty text= "No hay sugerencias :("></Empty>
    itemSeparator = () => <Separator> </Separator>
    renderItem = ({item}) => {
        return (
            <Suggestion {...{item}} />
        )        
    }
    
    

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
                    renderItem = { this.renderItem }
                />            
            </Layout>
        )
    }
}

export default SuggestionList;