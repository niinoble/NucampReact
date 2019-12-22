import * as ActionTypes from './ActionTypes'; 


export const Partners = (state = { isLoading: true,
    errMess: null,
    partner: [] }, action) => {
switch (action.type) {
case ActionTypes.ADD_PARTNERS:
return {...state, isLoading: false, errMess: null, partner: action.payload};

case ActionTypes.PARTNERS_LOADING:
return {...state, isLoading: true, errMess: null, partner: []}

case ActionTypes.PARTNERS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
};