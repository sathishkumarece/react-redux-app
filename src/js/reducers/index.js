import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types'

const initialState = {
    articles: [],
    remoteArticle: []
}

export default (state = initialState, action) => {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, { articles: state.articles.concat(action.payload) })
    }
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, { remoteArticle: state.remoteArticle.concat(action.payload) })
    }
    return state;
}
