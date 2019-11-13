import React from 'react';
import './App.scss';
import PopularShows from './PopularShows.jsx';
import apis from './apis.js';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        console.log('apis: ', apis );
        this.state = {
            isLoaded: false,
            movies: null
        }
    }

    componentDidMount() {
        fetch(apis.popularTVShows)
            .then(res => res.json())
            .then(res => this.handleFetch(res))
    }

    handleFetch = (res) => {
        this.setState({
            ...this.state,
            isLoaded: true,
            movies : res
        });
    };


    render() {
        const {isLoaded, movies} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <PopularShows items={movies}/>
            </div>
        )
    }
}
