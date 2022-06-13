import React from 'react';
import { connect } from 'react-redux';
import { setCardGoods } from '../../redux/cardGoods-Reducer';
import ProductCard from './ProductCard/ProductCard';
import Content from './Content';

class ContentApi extends React.Component {

    componentDidMount() {
        this.props.setCardGoods();
    }

    render() {
        let card = this.props.cardData.map(card => <ProductCard key={card.id} img={card.img} name={card.name} price={card.price} cardId={card.id} />);
        return <Content card={card} />
    }
}

const mapStateToProps = (state) => {
    return {
        cardData: state.cardGoods.cardData
    }
}

const ContentContainer = connect(mapStateToProps, { setCardGoods })(ContentApi);

export default ContentContainer;