import { ADD_ARTICLE } from '../constants/action-types';

const forbiddenWords = ["money", "spam"];

export default function forbiddenWordMiddleware({ dispatch }) {

    return function (next) {
        return function (action) {

            if (action.type === ADD_ARTICLE) {
                const found = forbiddenWords.filter(word => action.payload.title.includes(word))
                if (found.length) {
                    return dispatch({ type: "BAD_WORD_FOUND" })
                }
            }
            return next(action);
        }
    }
}