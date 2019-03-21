import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppNavigator from './app-navigator';
import {
    createReduxContainer,
    reduxifyNavigator
} from 'react-navigation-redux-helpers';

//const addListener =  createReduxBoundAddListener('root');
const AppNavigatorWithState = createReduxContainer(AppNavigator, 'root');
const mapStateToProps = state => ({
    state: state.navigation
})

/* class AppNavigatorWithState extends Component {

    componentDidMount() {
        initializeListeners('root', this.props.navigation);
    }   

    render (){

        const navigation ={
            dispatch: this.props.dispatch,
            state: this.props.navigation,
            // addListener : 
        }
        return  (
            <AppNavigator 
                navigation = {navigation}
            />
        )
    }
} */

/* function mapStateToProps(state) {
    return {
        navigation: state.navigation, //este campo deber ser un de los key declarados en el reducer
    }

} */
export default connect(mapStateToProps)(AppNavigatorWithState);