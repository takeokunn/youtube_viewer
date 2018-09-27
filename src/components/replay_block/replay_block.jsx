import React from 'react';
import PropTypes from 'prop-types';
import reactStringReplace from 'react-string-replace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTimesCircle, faEye, faComment } from '@fortawesome/free-solid-svg-icons';

import styles from './replay_block.css';

const regExp = /(https?:\/\/\S+)/g;
const replaceCb = match => <a href={ match } target='_blank' rel='noopener noreferrer'>{ match }</a>;

class ReplayBlock extends React.Component {

    handleClose() {
        this.props.handleClose(this.props.index);
    }

    renderComments() {
        return this.props.comments.map((comment, index) => (
            <li key={ index }>
                <img src={ comment.image_url } />
                <div>
                    <p>{ reactStringReplace(comment.text, regExp, replaceCb)  }</p>
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
                <div className={ styles.info }>
                    <div>
                        <p>{ this.props.title }</p>
                        <p>{ reactStringReplace(this.props.description, regExp, replaceCb) }</p>
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={ faEye } />
                            <span>{ parseInt(this.props.view_count).toLocaleString() }</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faComment } />
                            <span>{ parseInt(this.props.comment_count).toLocaleString() }</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faThumbsUp } />
                            <span>{ parseInt(this.props.like_count).toLocaleString() }</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faThumbsDown } />
                            <span>{ parseInt(this.props.dislike_count).toLocaleString() }</span>
                        </li>
                    </ul>
                </div>
                <div className={ styles.comment }>
                    <ul>
                        { ::this.renderComments() }
                    </ul>
                </div>
            </div>
        );
    }
}

ReplayBlock.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    video_id: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    comment_count: PropTypes.any,
    dislike_count: PropTypes.any,
    favorite_count: PropTypes.any,
    like_count: PropTypes.any,
    view_count: PropTypes.any,
    handleClose: PropTypes.func.isRequired
};

export default ReplayBlock;
