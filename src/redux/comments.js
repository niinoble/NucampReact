<<<<<<< HEAD
import {CONTENTS} from '../shared/comments'

export const Comments = (state = COMMENTS, action) =>{
    switch (action.type){
        default: return state;
    }
}
=======
import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return stgit aate.concat(comment);
        default:
            return state;
      }
};
>>>>>>> 1a2607b0efd994c4deb268676124fd3a168d6717
