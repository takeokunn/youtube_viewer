import React from 'react';

import styles from './replay_list.css';
import ReplayBlock from 'Components/replay_block/replay_block';

class ReplayList extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={ styles.block }>
                <ReplayBlock />
            </div>
        );
    }
}

export default ReplayList;
