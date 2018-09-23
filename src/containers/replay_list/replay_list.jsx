import React from 'react';
import PropTypes from 'prop-types';

import styles from './replay_list.css';
import ReplayBlock from 'Components/replay_block/replay_block';

class ReplayList extends React.Component {

    renderReplayBlock() {
        return this.props.youtube.replay_videos.map((video, index) => (
            <ReplayBlock
                key={ index }
                index={ index }
                title={ video.title }
                description={ video.description }
                video_id={ video.video_id }
                comments={ video.comments }
                comment_count={ video.comment_count }
                dislike_count={ video.dislike_count }
                favorite_count={ video.favorite_count }
                like_count={ video.like_count }
                view_count={ video.view_count }
                handleClose={ this.props.handleClose } />
        ));
    }

    render() {
        return (
            <div className={ styles.block }>
                { ::this.renderReplayBlock() }
            </div>
        );
    }
}

ReplayList.propTypes = {
    youtube: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default ReplayList;
