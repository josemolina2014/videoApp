import {createStore, applyMiddleware  } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import reducer from './reducers/index';


// const store = createStore(reducer, {
//     suggestionList: [],
//     categoryList : []
// });

const persisConfig = {
    key : 'root',
    storage,
    blacklist: ['navigation'] //se definen cuales estados se resetean cuando se recargue la aplicación
}
 const persistedReducer = persistReducer(persisConfig, reducer)
 const navigationMiddleWare = createReactNavigationReduxMiddleware(     
     state => state.navigation //este campo deber ser un de los key declarados en el reducer
 )
 const store = createStore(
                            persistedReducer,
                            applyMiddleware(navigationMiddleWare)
                          )
 const persistor = persistStore(store)

export {store, persistor};