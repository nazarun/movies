import React from 'react';
import './App.scss';

const PopularTVShowItem = (props) => {
    const { id, name, overview } = props.item;
    return (
        <div key={id} className='tv-show-item'>
            <div className='show-item-title'>
                {name}
            </div>
            <div>
                {overview}
            </div>
        </div>
    );

};

export default PopularTVShowItem;
