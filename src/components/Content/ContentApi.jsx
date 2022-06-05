import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import * as axios from 'axios';
import Content from './Content';

class ContentApi extends React.Component {

    componentDidMount() {
        axios.get('https://192.168.1.100:5443')
            .then(res => {
                this.props.setCardGoods(res.data);
            })
    }

    render() {
        let card = this.props.cardData.map(card => <ProductCard key={card.id} img={card.img} name={card.name} price={card.price} />);
        return <Content card={card} />
    }
}

export default ContentApi;