const ENTERSEARCHSTRING = 'enterSearchString';
const BUTTONREPLACEMENT = 'buttonreplacement';

let initialState = {
    searchSite: '',

    nameBtnHeader: [
        { id: 0, name: 'акции и скидки' },
        { id: 1, name: 'оплата и доставка' },
        { id: 2, name: 'новости' },
        { id: 3, name: 'отзывы' },
        { id: 4, name: 'контакты' },
        { id: 5, name: 'вакансии' }],

    nameNavbar: [
        { id: 0, name: 'распродажа', qt: 8 },
        { id: 1, name: 'товары первой необходимости', qt: 10 },
        { id: 2, name: 'инструменты', qt: 55 },
        { id: 3, name: 'клея, герметики', qt: 32 },
        { id: 4, name: 'комплектующие для офисных столов', qt: 17 },
        { id: 5, name: 'крепежная фурнитура', qt: 4 },
        { id: 6, name: 'кромочные материалы', qt: 85 },
        { id: 7, name: 'кухонные комплектующие', qt: 22 },
        { id: 8, name: 'лицевая фурнитура', qt: 17 },
        { id: 9, name: 'мебельное освещение', qt: 69 },
        { id: 10, name: 'механизм шкаф-кровать', qt: 33 },
        { id: 11, name: 'механизм для выдвижных ящиков', qt: 1 },
        { id: 12, name: 'механизм для раздвижных столов', qt: 0 },
        { id: 13, name: 'мойки, смесители', qt: 14 },
        { id: 14, name: 'опоры мебельные', qt: 69 }]
};

const instantSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTERSEARCHSTRING:
            return {
                ...state,
                searchSite: action.word
            }

        case BUTTONREPLACEMENT:
            return {
                ...state,
                nameBtnHeader: state.nameBtnHeader.map(i => {
                    if (i.id === 0) return { ...i, name: state.searchSite }
                    return i;
                })
            };
        default:
            return state;
    }
}

export default instantSearchReducer;

export const buttonReplacementAC = () => {
    return {
        type: BUTTONREPLACEMENT
    }
}

export const enterSearchStringAC = (word) => {
    return {
        type: ENTERSEARCHSTRING,
        word: word
    }
}