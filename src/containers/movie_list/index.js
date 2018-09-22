import { connect } from 'react-redux';

import { youtube } from 'Actions/';
import MovieList from './movie_list.jsx';

const mapStateToProps = state => {
    const { youtube } = state;
    return { youtube };
};

const mapDispatchToProps = dispatch => {
    return {
        addToReplayList: index => dispatch(youtube.handleReplayList.add(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
