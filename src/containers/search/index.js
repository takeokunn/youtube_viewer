import { connect } from 'react-redux';

import { youtube } from 'Actions/';
import Search from './search.jsx';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChannelVideo: channel_id => dispatch(youtube.fetchChannelVideo.request(channel_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
