import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrls';



export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)));
};


export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const addFeedback = feedback => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postComment = (campsiteId, rating, author, text) => dispatch => {

    const newComment = {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};



export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});



export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)));
}

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});



//Assignment

export const fetchPartners = () => dispatch => {
    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)));
}

export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});



export const fetchFeedback= () => dispatch => {
    return fetch(baseUrl + 'feedback')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`); error.response = response;
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(feedback => dispatch(addFeedback(feedback)));
};


     
       
export const postFeedback = (firstname, lastname, telnum,email, agree, contactType, message, date) => dispatch => {

    const newFeedback = {

        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message,
        date: date

    };

    newFeedback.date = new Date().toISOString();


    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addFeedback(response)))
        .catch(error => {
            console.log('post feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};
