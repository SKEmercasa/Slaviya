import styleHeader from './Bar.module.css';
import logo from '../../../logo/slav-logo.png'
import InstantSearch from './InstantSearch/InstantSearch';
import MenuBar from './MenuBar/MenuBar';

const Bar = (props) => {

    return (
        <div className={styleHeader.bar}>
            <div><img src={logo} alt="logo" sizes="max-width: 3em" srcSet={logo} /></div>
            <InstantSearch searchClick={props.searchClick} searchLine={props.searchLine} />
            <MenuBar />
        </div>
    )
}

export default Bar;