import React, { Component } from 'react';

import API from '../utils/api';
import {connect} from 'react-redux'

import Home from './screens/containers/home';
import Header from './sections/components/header';
import Suggestions from './videos/containers/suggestions-list';
import CategoryList from './videos/containers/category-list';
import {
    Text,
    ScrollView
  } from 'react-native';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';

class AppLayout extends Component {

    async componentDidMount() {
        const categoriesList = await API.getMovies();
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: {
            categoriesList
          }
        })
    
        const suggestionList = await API.getSuggestions(10);
    
        this.props.dispatch({
          type: 'SET_SUGGESTION_LIST',
          payload: {
            suggestionList
          }
        })
      }

    render() {
      if(this.props.selectedMovie){
        return <Movie/>
      }
        return (
          <ScrollView>
            <Home>
                <Header>
                    <Text>Hola</Text>
                </Header>
                <Search/>
                <CategoryList />
                <Suggestions />
            </Home>
            </ScrollView>
        );
    }
}

function mapStateToProps(state){
  return{
    selectedMovie: state.selectedMovie
  }
}

export default connect(mapStateToProps) (AppLayout);