import { YOUTUBE }  from 'Constants/action_type.constant';

const initialState = {
    isFetching: false,
    search_videos: [],
    replay_videos: []
};

const channel_video = (state, action) => {
    switch (action.type) {
    case YOUTUBE.FETCH_CHANNEL_VIDEO_REQUEST:
        return { ...state, isFetching: true };
    case YOUTUBE.FETCH_CHANNEL_VIDEO_SUCCESS:
        return {
            ...state,
            isFetching: false,
            search_videos: action.payload.data.items.map(item => ({
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail_url: item.snippet.thumbnails.medium.url,
                video_id: item.id.videoId,
                comments: []
            }))
        };
    case YOUTUBE.FETCH_CHANNEL_VIDEO_FAILURE:
        return { ...state, isFetching: false };
    }
};

const comments = (state, action) => {
    switch (action.type) {
    case YOUTUBE.FETCH_COMMENTS_REQUEST:
        return { ...state, isFetching: true };
    case YOUTUBE.FETCH_COMMENTS_SUCCESS:
        return {
            ...state,
            replay_videos: state.replay_videos.map((video, index) => {
                console.log(index)
                console.log(action.payload.replay_index)
                if (index === action.payload.replay_index) {
                    video.comments = action.payload.data.items.map(item => {
                        return {
                            image_url: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
                            text: item.snippet.topLevelComment.snippet.textOriginal
                        }
                    })
                }
                return video;
            }),
            isFetching: false
        };
    case YOUTUBE.FETCH_COMMENTS_FAILURE:
        return { ...state, isFetching: false };
    }
};

const handle_replay_list = (state, action) => {
    switch (action.type) {
    case YOUTUBE.ADD_REPLAY_LIST:
        return {
            ...state,
            replay_videos: [...state.replay_videos, state.search_videos[action.payload.video_index]]
        };
    case YOUTUBE.DELETE_REPLAY_LIST:
        return {
            ...state,
            replay_videos: state.replay_videos.filter((video, index) => index != action.payload.replay_index)
        };
    }
};

const youtube = (state = initialState, action) => {
    switch (action.type) {
    // channel_video
    case YOUTUBE.FETCH_CHANNEL_VIDEO_REQUEST:
    case YOUTUBE.FETCH_CHANNEL_VIDEO_SUCCESS:
    case YOUTUBE.FETCH_CHANNEL_VIDEO_FAILURE:
        return channel_video(state, action);
    // comments
    case YOUTUBE.FETCH_COMMENTS_REQUEST:
    case YOUTUBE.FETCH_COMMENTS_SUCCESS:
    case YOUTUBE.FETCH_COMMENTS_FAILURE:
        return comments(state, action);
    // handle replay list
    case YOUTUBE.ADD_REPLAY_LIST:
    case YOUTUBE.DELETE_REPLAY_LIST:
        return handle_replay_list(state, action);
    default:
        return { ...state };
    }
};

export default youtube;
