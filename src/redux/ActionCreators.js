import * as ActionTypes from './ActionTypes';
import {CAMPSITE} from '../shared/campsites';


export const fetchCampsites = () => dispatch => {
    dispatch (campsitesLoading());
    siteTimeout(() => {
        dispatch(addCampsites(CAMPSITE));
    }, 2000);
};

export const campsiteLoading = () => ({
    type: ActionTypes.CAMPSITE_LOADING
});

export const campsiteFailed = () => ({
    type: ActionTypes.CAMPSITE_FAILED
});

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});


