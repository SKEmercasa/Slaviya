import ContentApi from './ContentApi';
import { connect } from 'react-redux';
import { setCardGoodsAC } from '../redux/cardGoods-Reducer';

const mapStateToProps = (state) => {
    return {
        cardData: state.cardGoods.cardData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCardGoods: (cardData) => { dispatch(setCardGoodsAC(cardData)) }
    }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(ContentApi);

export default ContentContainer;