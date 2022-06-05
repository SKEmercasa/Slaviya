import { combineReducers, legacy_createStore as createStore } from "redux";
import cardGoodsReducer from "./cardGoods-Reducer";
import instantSearchReducer from './instantSearch-Reducer';

let reducers = combineReducers({
    mainPage: instantSearchReducer,
    cardGoods: cardGoodsReducer
});



export let store = createStore(reducers);

window.store = store;