import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './search.css';
import options from 'Options/youtuber.json';

class Search extends React.Component {

    componentDidMount() {
        const channel_id = options.data[0].channel_id;
        this.props.fetchChannelVideo(channel_id);
    }

    handleChange(e) {
        const channel_id = e.target.value;
        this.props.fetchChannelVideo(channel_id);
    }

    renderOptions() {
        return options.data.map((elem, index) => <option key={ `search_${index}` } value={ elem.channel_id }>{ elem.name }</option>);
    }

    render() {
        return (
            <div className={ styles.block }>
                <div className={ styles.icon_block }>
                    <FontAwesomeIcon icon="search" />
                </div>
                <div className={ styles.youtuber_block }>
                    <select onChange={ ::this.handleChange }>
                        { this.renderOptions() }
                    </select>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    fetchChannelVideo: PropTypes.func.isRequired
};

export default Search;
