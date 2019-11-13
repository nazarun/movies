import React from 'react';
import './App.scss';
import PopularTVShowItem from './PopularTVShowItem.jsx';

export default class PopularShows extends React.Component {

    constructor(props) {
        super(props);
    }

    renderListItems = () => {
        return this.props.items.results.map(item => {
            return <PopularTVShowItem
                key={item.id}
                item={item}
            />
        });
    };




    render() {
        console.log(' props: ', this.props );
        return(
            <div>
                <div>Popular TV Shows </div>
                <div className='container'>
                    {this.renderListItems()}
                </div>
            </div>
        );
    }
}
