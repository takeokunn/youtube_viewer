import React from 'react';
import PropTypes from 'prop-types';

import styles from './movie_block.css';

class MovieBlock extends React.Component {

    handleClick() {
        this.props.handleClick(this.props.index);
    }

    render() {
        return (
            <div className={ styles.block }>
                <img
                    src={ this.props.thumbnail_url }
                    alt={ this.props.title }
                    className={ styles.img }
                    onClick={ ::this.handleClick } />
                <p className={ styles.title }>{ this.props.title }</p>
            </div>
        );
    }
}

MovieBlock.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default MovieBlock;
