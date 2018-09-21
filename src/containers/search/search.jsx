import React from 'react';

import styles from './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Search extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={ styles.block }>
                <div className={ styles.icon_block }>
                    <FontAwesomeIcon icon="search" />
                </div>
                <div className={ styles.youtuber_block }>
                    <p className={ styles.p }>木下ゆうか</p>
                </div>
            </div>
        );
    }
}

export default Search;
