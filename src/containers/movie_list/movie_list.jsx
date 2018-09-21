import React from 'react';

import styles from './movie_list.css';
import MovieBlock from 'Components/movie_block/movie_block';

class MovieList extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={ styles.block }>
                <MovieBlock />
                <MovieBlock />
                <MovieBlock />
                <MovieBlock />
                <MovieBlock />
            </div>
        );
    }
}

export default MovieList;
