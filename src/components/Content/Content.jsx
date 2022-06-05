import React from 'react';
import styleMain from './Content.module.css';

const Content = (props) => {
    return (
        <div className={styleMain.content}>
            <div className={styleMain.headerContent}>
                <span>новинки</span>
            </div>
            <div className={styleMain.cardContent}>
                {props.card}
            </div>
        </div>
    )
}

export default Content;