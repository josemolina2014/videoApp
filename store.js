import {createStore } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers/videos';


// const store = createStore(reducer, {
//     suggestionList: [],
//     categoryList : []
// });

const persisConfig = {
    key : 'root',
    storage,
    blacklist: ['selectedMovie'] //se definen cuales estados se resetean cuando se recargue la aplicación
}
 const persistedReducer = persistReducer(persisConfig, reducer)

 const store = createStore(persistedReducer)
 const persistor = persistStore(store)

export {store, persistor};