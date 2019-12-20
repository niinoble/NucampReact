<<<<<<< HEAD
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
=======
import { createStore,combineReducers, applyMiddleware} from 'redux';
import { Campsites} from './campsite';
import { Comments} from './comments';
import { Partners} from './partners';
import { Promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
>>>>>>> 1a2607b0efd994c4deb268676124fd3a168d6717

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
<<<<<<< HEAD
        })
=======
        }),
        applyMiddleware(thunk, logger)
>>>>>>> 1a2607b0efd994c4deb268676124fd3a168d6717
    );

    return store;
}