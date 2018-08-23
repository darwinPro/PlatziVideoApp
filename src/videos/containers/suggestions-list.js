import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native'
import SugestionsListLayout from '../components/sugestions-list-layout';
import Empty from '../components/emtpy';
import VerticalSeparator from '../components/vertical-separator';
import Sugerencia from '../components/sugesstion';
import { connect } from 'react-redux'

class Suggestions extends Component {
    renderEmtpy = () => <Empty text="No hay sugerencias"></Empty>
    itemSeparator =() => <VerticalSeparator/>
    viewMovie=item=>{
        this.props.dispatch({
            type:'SET_SELECTED_MOVIE',
            payload: {
                movie: item
            }
        })
    }
    renderItems = ({item}) => (
        <Sugerencia  {...item} onPress={()=>{this.viewMovie(item)}}/>
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

function mapStateToProps(state){
    return {
        list: state.suggestionList
    }
}

export default connect(mapStateToProps) (Suggestions);