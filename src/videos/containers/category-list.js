import React, { Component } from 'react';
import {
    View,
    FlatList
} from 'react-native'
import Empty from '../components/emtpy';
import CategoryListLayout from '../components/categories-list-layout';
import HorizontalSeparator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import { connect } from 'react-redux'

function mapStateToProps(state){
    return {
        list: state.categoriesList
    }
}

class CategoryList extends Component {
    keyEstractro = item => item.id.toString()
    renderEmtpy = () => <Empty text="No hay sugerencias"></Empty>
    itemSeparator = () => <HorizontalSeparator />
    renderItems = ({ item }) => (
        <Category  {...item} />
    )
    render() {
        return (
            <View>
                <CategoryListLayout
                    title="Categorias"
                >
                    <FlatList
                        horizontal
                        keyExtractor={this.keyEstractro}
                        data={this.props.list}
                        ListEmptyComponent={this.renderEmtpy}
                        ItemSeparatorComponent={this.itemSeparator}
                        renderItem={this.renderItems}
                    ></FlatList>
                </CategoryListLayout>
            </View>
        );
    }
}

export default connect(mapStateToProps) (CategoryList);