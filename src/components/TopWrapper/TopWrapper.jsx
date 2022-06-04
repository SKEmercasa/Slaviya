import React from 'react';
import Header from '../Header/Header';
import Bar from '../Bar/Bar';

const TopWrapper = (props) => {
    return (
        <div>
            <Header nameBtnHeader={props.nameBtnHeader} />
            <Bar value={props.value} searchClick={props.searchClick} searchLine={props.searchLine}/>
        </div>
    )
}

export default TopWrapper;