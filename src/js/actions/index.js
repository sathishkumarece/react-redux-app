import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types';

export const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload
})

export const getData = () => {
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    }
}