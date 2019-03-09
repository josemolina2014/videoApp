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
                year : 2007,
                key: '1'
            },
            {
                title: 'Pokemon',
                year : 2005,
                key: '2'
            },
            {
                title: 'Roma',
                year: 2019,
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