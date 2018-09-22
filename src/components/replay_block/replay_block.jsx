import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Icon from 'Assets/icon.png';
import styles from './replay_block.css';

class ReplayBlock extends React.Component {

    handleClose() {
        this.props.handleClose(this.props.index);
    }

    renderComments() {
        return this.props.comments.map((comment, index) => (
            <li key={ index }>
                <img src={ comment.image_url } />
                <div>
                    <p>{ comment.text }</p>
                </div>
            </li>
        ));
    }

    render() {
        const video_src = `https://www.youtube.com/embed/${this.props.video_id}`;
        return (
            <div className={ styles.block }>
                <div onClick={ ::this.handleClose } className={ styles.close }>
                    <FontAwesomeIcon icon={ faTimesCircle } />
                </div>
                <div className={ styles.video }>
                    <iframe
                        src={ video_src }
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen></iframe>
                </div>
                <div className={ styles.side }>
                    <ul className={ styles.ul }>
                        { ::this.renderComments() }
                    </ul>
                    <ul className={ styles.info }>
                        <li className={ styles.li }>
                            <span className={ styles.good }>
                                <FontAwesomeIcon icon={ faThumbsUp } />
                            </span>
                            <span>15000</span>
                        </li>
                        <li className={ styles.li }>
                            <span className={ styles.bad }>
                                <FontAwesomeIcon icon={ faThumbsDown } />
                            </span>
                            <span>800</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

ReplayBlock.propTypes = {
    index: PropTypes.number.isRequired,
    video_id: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default ReplayBlock;
