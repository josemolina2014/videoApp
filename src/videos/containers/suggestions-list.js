import React, {Component} from 'react';
import { 
        FlatList,
        Text 
        } from "react-native";
import Layout from '../components/suggestion-list-layout';

class SuggestionList extends Component {
    render(){
        const list = [
        {
            title:  'titulo 1',
            key: '1'
        },
        {
            title: 'titulo 2',
            key: '2'
        }
    ]
        return (      
            <Layout
                title ="Recomendado para ti"
            >
                <FlatList
                    data = {list}
                    renderItem = { ({item}) => <Text>{item.title}</Text> }
                />            
            </Layout>
        )
    }
}

export default SuggestionList;