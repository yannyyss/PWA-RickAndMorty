import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import charsReducer, { getCharactersAction } from './charsDuck'

let rootReducer = combineReducers({
    characters: charsReducer
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer, 
        composeEnhancers(applyMiddleware(thunk))
    )
    getCharactersAction()(store.dispatch, store.getState)
    return store
}