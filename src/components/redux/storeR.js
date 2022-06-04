import { combineReducers, legacy_createStore as createStore } from "redux";
import instantSearchReducer from './instantSearch-Reducer';

let reducers = combineReducers({
    mainPage: instantSearchReducer
});

export let store = createStore(reducers);