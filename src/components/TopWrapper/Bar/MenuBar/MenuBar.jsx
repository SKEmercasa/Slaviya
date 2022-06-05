import styleHeader from './MenuBar.module.css';
import imgLogin from '../../../../logo/login192.png';
import imgShop from '../../../../logo/shop192.png';
import imgBCall from '../../../../logo/BCall192.png';
import imgMap from '../../../../logo/map192.png';

const MenuBar = () => {
    return (
        <div className={styleHeader.menuBar}>
            <div>
                <p>+7 (901) 007-16-16</p>
                <p>+7 (901) 007-16-17</p>
                <p>+7 (901) 490-48-94</p>
            </div>
            <div><img src={imgLogin} alt="login" sizes="max-width: 1.5rem" srcSet={imgLogin} /></div>
            <div><img src={imgShop} alt="shop" sizes="max-width: 1.5rem" srcSet={imgShop} /></div>
            <div><img src={imgBCall} alt="bcall" sizes="max-width: 1.5rem" srcSet={imgBCall} /></div>
            <div><img src={imgMap} alt="bcall" sizes="max-width: 1.5rem" srcSet={imgMap} /></div>
        </div>
    )
}

export default MenuBar;