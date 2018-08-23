import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native'
import API from '../../../utils/api'
import {connect} from 'react-redux'

class Search extends Component {
    state = {
        text:''
    }
    handleSubmit = async () => {
        console.log(this.state.text)
        const moview = await API.searchMovie(this.state.text)
        console.log(moview)
        this.props.dispatch({
            type:'SET_SELECTED_MOVIE',
            payload: {
                movie: moview[0]
            }
        })
    }
    handleChangueText = (text) => {
        this.setState({
            text: text
        })
    }
    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder="Busca tu película favorita"
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChangueText}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    }
})

export default connect(null)(Search);