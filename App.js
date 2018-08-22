import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Suggestions from './src/videos/containers/suggestions-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';



type Props = {};
export default class App extends Component<Props> {

  state = {
    suggestionsList: [],
    categories: []
  }

  async componentDidMount() {
    const movies = await API.getSuggestions(10);
    const categories = await API.getMovies();

    this.setState({
      suggestionsList: movies,
      categories: categories
    })
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>Hola</Text>
        </Header>

        <Player/>
        
        <Text>Buscador</Text>
        <Text>Header</Text>
        <Text>Header</Text>

        <CategoryList list={this.state.categories} />

        <Suggestions list={this.state.suggestionsList} />
      </Home>
    );
  }
}

