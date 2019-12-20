import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Reducer, initialState } from './reducer';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

import thunk from 'redux-thunk' ;
import logger from 'redux-logger';

combineReducers({
    campsites: Campsites,
    comments: Comments,
    partners: Partners,
    promotions: Promotions
    
}),
applyMiddleware(thunk, logger)

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
}