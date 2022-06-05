import styleHeader from './Header.module.css';
import ButtonHeader from './ButtonHeader';



const Header = (props) => {
    let block = props.nameBtnHeader.map(name => <ButtonHeader key={name.id} name={name.name} />);

    return (
        <div className={styleHeader.header}>
            {block}
        </div>
    );
};

export default Header;