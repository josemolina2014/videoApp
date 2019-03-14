import React, {Component} from 'react';
import {connect} from 'react-redux';


import MovieLayout from '../components/movie-layout';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class Movie extends Component {

    closeVideo = () => {
        this.props.dispatch({ //se elimina el contendio de la variable SET_SELECTED_MOVIE, colocandolo el valor de movie del payload en null
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie : null,
            }
        })

    }

    render () {
        return (
            <MovieLayout>
                <Header>
                    <Close 
                        onPress = {this.closeVideo}
                    />
                </Header>
                <Player/>   
            </MovieLayout>
        )
    }
}

export default connect(null)(Movie);