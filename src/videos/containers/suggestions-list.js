import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native'
import SugestionsListLayout from '../components/sugestions-list-layout';
import Empty from '../components/emtpy';
import VerticalSeparator from '../components/vertical-separator';
import Sugerencia from '../components/sugesstion';

class Suggestions extends Component {
    renderEmtpy = () => <Empty text="No hay sugerencias"></Empty>
    itemSeparator =() => <VerticalSeparator/>
    renderItems = ({item}) => (
        <Sugerencia  {...item}/>
    )
    keyEstractro = item => item.id.toString()
    
    render() {
        return (
            <SugestionsListLayout
                title='Recomendado para ti'
            >
                <FlatList
                    keyExtractor={this.keyEstractro}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmtpy}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItems}
                ></FlatList>
            </SugestionsListLayout>

        );
    }
}

export default Suggestions;