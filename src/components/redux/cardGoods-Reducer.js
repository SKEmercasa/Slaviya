import { getCards } from "../../api/api";

const SETCARDGOODS = 'setcardgoods';
const SHOWCURRENTCARD = 'showcurrentcard';

let initialState = {

    cardData: [],
    isShowCurrentCard: []
};

const cardGoodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETCARDGOODS:
            return {
                ...state,
                cardData: action.cardData
            }
        case SHOWCURRENTCARD:
            return {
                ...state,
                isShowCurrentCard: action.card
            }
        default:
            return state;
    }
}

export default cardGoodsReducer;

const setCardGoodsAC = (cardData) => ({ type: SETCARDGOODS, cardData: cardData });
export const setCardGoods = () => {
    return (dispatch) => { getCards().then(data => dispatch(setCardGoodsAC(data))) }
}

const showCurrentCardAC = (card) => ({ type: SHOWCURRENTCARD, card: card });
export const showCurrentCard = () => {
    return (dispatch) => { getCards().then(data => dispatch(showCurrentCardAC(data))) }
}