import { NavLink } from "react-router-dom";
import styleMain from './ProductCard.module.css';

const ProductCard = (props) => {
    return (
        <div className={styleMain.productCard}>
            <div>{props.img}</div>
            <NavLink to={`/card/${props.cardId}`}>{props.name}</NavLink>
            <div>{props.price}</div>
        </div>
    );
};

export default ProductCard;