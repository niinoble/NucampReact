import { createStore,combineReducers, applyMiddleware} from 'redux';
import { Campsites} from './campsite';
import { Comments} from './comments';
import { Partners} from './partners';
import { Promotions} from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};