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
        { id: 14, name: 'опоры мебельные', qt: 69 }],

    cardData: [
        { id: 0, img: 'img1', name: 'name', price: 500 },
        { id: 1, img: 'img2', name: 'name', price: 250 },
        { id: 2, img: 'img3', name: 'name', price: 600 },
        { id: 3, img: 'img4', name: 'name', price: 350 },
        { id: 4, img: 'img5', name: 'name', price: 300 },
        { id: 5, img: 'img6', name: 'name', price: 1000 },
        { id: 6, img: 'img7', name: 'name', price: 200 },
        { id: 7, img: 'img8', name: 'name', price: 700 },
        { id: 8, img: 'img9', name: 'name', price: 750 },
        { id: 9, img: 'img10', name: 'name', price: 600 },
        { id: 10, img: 'img11', name: 'name', price: 700 },
        { id: 11, img: 'img12', name: 'name', price: 350 },
        { id: 12, img: 'img13', name: 'name', price: 400 },
        { id: 13, img: 'img14', name: 'name', price: 500 },
        { id: 14, img: 'img15', name: 'name', price: 100 },
        { id: 15, img: 'img16', name: 'name', price: 150 },
        { id: 16, img: 'img17', name: 'name', price: 1200 },
        { id: 17, img: 'img18', name: 'name', price: 17000 },
        { id: 18, img: 'img19', name: 'name', price: 360 },
        { id: 19, img: 'img20', name: 'name', price: 450 },
        { id: 20, img: 'img21', name: 'name', price: 1950 },
        { id: 21, img: 'img22', name: 'name', price: 2500 },
        { id: 22, img: 'img23', name: 'name', price: 350 },
        { id: 23, img: 'img24', name: 'name', price: 550 },
        { id: 24, img: 'img25', name: 'name', price: 900 },
        { id: 25, img: 'img26', name: 'name', price: 410 },
        { id: 26, img: 'img27', name: 'name', price: 150 },
        { id: 27, img: 'img28', name: 'name', price: 600 },
        { id: 28, img: 'img29', name: 'name', price: 850 },
        { id: 29, img: 'img30', name: 'name', price: 5000 }]
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