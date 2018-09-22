import React from 'react';

import styles from './replay_list.css';
import ReplayBlock from 'Components/replay_block/replay_block';

class ReplayList extends React.Component {

    renderReplayBlock() {
        return this.props.youtube.replay_videos.map((video, index) => (
            <ReplayBlock
                key={ index }
                index={ index }
                video_id={ video.video_id }
                comments={ video.comments }
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

export default ReplayList;
