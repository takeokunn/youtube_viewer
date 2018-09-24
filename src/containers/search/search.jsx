import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './search.css';
import options from 'Options/youtuber.json';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            is_show: false,
            now_selected: options.data[0].channels[0].name
        };
    }

    componentDidMount() {
        const channel_id = options.data[0].channels[0].channel_id;
        this.props.fetchChannelVideo(channel_id);
    }

    handleChange(e) {
        const channel_id = e.target.value;
        this.props.fetchChannelVideo(channel_id);
    }

    toggleSearchBlock() {
        this.setState({ is_show: !this.state.is_show });
    }

    handleSelect(channel) {
        this.props.fetchChannelVideo(channel.channel_id);
        this.setState({
            is_show: false,
            now_selected: channel.name
        });
    }

    renderList() {
        return options.data.map((elem, outer_index) => {
            return elem.channels.map((channel, inner_index) => (
                <li key={ `search_${outer_index}_${inner_index}` } onClick={ () => this.handleSelect(channel) }>
                    <div className={ styles.img_block }>
                        <img src={ channel.image_url } />
                    </div>
                    <div className={ styles.name_block }>
                        <p>{ channel.name }</p>
                    </div>
                </li>
            ));
        });
    }

    renderSearchBlock() {
        if (!this.state.is_show) return;
        return (
            <ul className={ styles.list_block }>
                { ::this.renderList() }
            </ul>
        );
    }

    render() {
        return (
            <div className={ styles.block }>
                <div className={ styles.icon_block }>
                    <FontAwesomeIcon icon="search" />
                </div>
                <div className={ styles.youtuber_block } onClick={ ::this.toggleSearchBlock }>
                    <p>{ this.state.now_selected }</p>
                </div>
                { ::this.renderSearchBlock() }
            </div>
        );
    }
}

Search.propTypes = {
    fetchChannelVideo: PropTypes.func.isRequired
};

export default Search;
