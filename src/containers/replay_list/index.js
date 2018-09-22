import { connect } from 'react-redux';

import { youtube } from 'Actions/';
import ReplayList from './replay_list.jsx';

const mapStateToProps = state => {
    const { youtube } = state;
    return { youtube };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClose: index => dispatch(youtube.handleReplayList.delete(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReplayList);
