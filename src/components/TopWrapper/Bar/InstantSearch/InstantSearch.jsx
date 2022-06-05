import React from 'react';
import styleHeader from './InstantSearch.module.css';

const InstantSearch = (props) => {
    let searchClick = () => {
        props.searchClick();
    };

    let searchLine = (e) => {
        let word = e.target.value;
        props.searchLine(word);
    };

    return (
        <label className={styleHeader.search}>
            <input value={props.value} onChange={searchLine} type="search" name="Поиск" id="0" placeholder='Введите название товара..' />
            <button type="submit" onClick={searchClick}>Найти</button>
        </label>
    )
}

export default InstantSearch;