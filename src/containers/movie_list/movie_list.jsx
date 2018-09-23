import React from 'react';
import PropTypes from 'prop-types';

import styles from './movie_list.css';
import MovieBlock from 'Components/movie_block/movie_block';

class MovieList extends React.Component {

    renderMovieBlock() {
        return this.props.youtube.search_videos.map((video, index) => (
            <MovieBlock
                key={ index }
                index={ index }
                title={ video.title }
                thumbnail_url={ video.thumbnail_url }
                handleClick={ this.props.addToReplayList } />
        ));
    }

    render() {
        return (
            <div className={ styles.block }>
                { ::this.renderMovieBlock() }
            </div>
        );
    }
}

MovieList.propTypes = {
    youtube: PropTypes.object.isRequired,
    addToReplayList: PropTypes.func.isRequired
};

export default MovieList;
