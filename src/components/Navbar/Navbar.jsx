import ItemNav from './ItemNav/ItemNav';
import styleNav from './Navbar.module.css';



const Navbar = (props) => {

    let block = props.nameNavbar.map(name => <ItemNav key={name.id} name={name.name} qt={name.qt} />);

    return (
        <div className={styleNav.navbar}>
            <div className={styleNav.wrapperNav}>
                <div className={styleNav.titleNav}>
                    <h2>Каталог товаров</h2>
                </div>
                {block}
            </div>
        </div>
    )
}

export default Navbar;