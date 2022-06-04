import styleMain from './ProductCard.module.css';

const ProductCard = (props) => {
    return (
        <div className={styleMain.productCard}>
            <div>{props.img}</div>
            <div>{props.name}</div>
            <div>{props.price}</div>
        </div>
    );
};

export default ProductCard;