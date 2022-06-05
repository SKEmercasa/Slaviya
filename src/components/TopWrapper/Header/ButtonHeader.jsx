import styleHeader from './Header.module.css';
import { NavLink } from 'react-router-dom';

const ButtonHeader = (props) => {
    return (
        <div className={styleHeader.button}>
            <NavLink className={styleHeader.link} to="/profile">
                {props.name}
            </NavLink>
        </div>
    )
}

export default ButtonHeader;