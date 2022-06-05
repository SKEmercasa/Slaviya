const SETCARDGOODS = 'setcardgoods';

let initialState = {
    
    cardData: []
};

const cardGoodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETCARDGOODS:
            return {
                ...state,
                cardData: action.cardData
            }
        default:
            return state;
    }
}

export default cardGoodsReducer;

export const setCardGoodsAC = (cardData) => {
    return {
        type: SETCARDGOODS,
        cardData: cardData
    }
}