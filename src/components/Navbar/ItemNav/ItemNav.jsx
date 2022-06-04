import styleNav from '../Navbar.module.css';

const ItemNav = (props) => {
    return (
        <div className={styleNav.nomination}>
            <div>
                {props.name}
            </div>
            <span>
                ({props.qt})
            </span>
        </div>
    )
}

export default ItemNav;