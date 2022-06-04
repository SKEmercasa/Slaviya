import styleMain from './Content.module.css';
import ProductCard from './ProductCard/ProductCard';

const Content = (props) => {
    let card = props.cardData.map(card => <ProductCard key={card.id} img={card.img} name={card.name} price={card.price} />);

    return (
        <div className={styleMain.content}>
            <div className={styleMain.headerContent}>
                <span>новинки</span>
            </div>
            <div className={styleMain.cardContent}>
                {card}
            </div>
        </div>
    )
}

export default Content;