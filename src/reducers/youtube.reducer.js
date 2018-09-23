import { YOUTUBE }  from 'Constants/action_type.constant';

import { storage } from 'Services/';

const initial_replay_videos = JSON.parse(storage.playlist.get()) || [];

const initial_state = {
    is_fetching: false,
    search_videos: [],
    replay_videos: initial_replay_videos
};

const channel_video = (state, action) => {
    switch (action.type) {
    case YOUTUBE.FETCH_CHANNEL_VIDEO_REQUEST:
        return { ...state, is_fetching: true };
    case YOUTUBE.FETCH_CHANNEL_VIDEO_SUCCESS:
        return {
            ...state,
            is_fetching: false,
            search_videos: action.payload.data.items.map(item => ({
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail_url: item.snippet.thumbnails.medium.url,
                video_id: item.id.videoId,
                comments: [],
                comment_count: null,
                dislike_count: null,
                favorite_count: null,
                like_count: null,
                view_count: null,
            }))
        };
    case YOUTUBE.FETCH_CHANNEL_VIDEO_FAILURE:
        return { ...state, is_fetching: false };
    }
};

const comments = (state, action) => {
    switch (action.type) {
    case YOUTUBE.FETCH_COMMENTS_REQUEST:
        return { ...state, is_fetching: true };
    case YOUTUBE.FETCH_COMMENTS_SUCCESS:
        return {
            ...state,
            replay_videos: state.replay_videos.map((video, index) => {
                const replay_index = action.payload.replay_index;
                const data = action.payload.data;
                if (index === replay_index) {
                    video.comments = data.items.map(item => ({
                        image_url: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
                        text: item.snippet.topLevelComment.snippet.textOriginal
                    }));
                }
                return video;
            }),
            is_fetching: false
        };
    case YOUTUBE.FETCH_COMMENTS_FAILURE:
        return { ...state, is_fetching: false };
    }
};

const video_statistics = (state, action) => {
    switch (action.type) {
    case YOUTUBE.FETCH_VIDEO_STATISTICS_REQUEST:
        return { ...state, is_fetching: true };
    case YOUTUBE.FETCH_VIDEO_STATISTICS_SUCCESS:
        return {
            ...state,
            replay_videos: state.replay_videos.map((video, index) => {
                const replay_index = action.payload.replay_index;
                const statistics = action.payload.data.items[0].statistics;
                if (index === replay_index) {
                    video.comment_count = statistics.commentCount;
                    video.dislike_count = statistics.dislikeCount;
                    video.favorite_count = statistics.favoriteCount;
                    video.like_count = statistics.likeCount;
                    video.view_count = statistics.viewCount;
                }
                return video;
            }),
            is_fetching: false
        };
    case YOUTUBE.FETCH_VIDEO_STATISTICS_FAILURE:
        return { ...state, is_fetching: false };
    }
};

const handle_replay_list = (state, action) => {
    switch (action.type) {
    case YOUTUBE.ADD_REPLAY_LIST:
        storage.playlist.set(JSON.stringify([...state.replay_videos, state.search_videos[action.payload.video_index]]));
        return {
            ...state,
            replay_videos: [...state.replay_videos, state.search_videos[action.payload.video_index]]
        };
    case YOUTUBE.DELETE_REPLAY_LIST:
        storage.playlist.set(JSON.stringify(state.replay_videos.filter((video, index) => index != action.payload.replay_index)));
        return {
            ...state,
            replay_videos: state.replay_videos.filter((video, index) => index != action.payload.replay_index)
        };
    }
};

const youtube = (state = initial_state, action) => {
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
    // video statistics
    case YOUTUBE.FETCH_VIDEO_STATISTICS_REQUEST:
    case YOUTUBE.FETCH_VIDEO_STATISTICS_SUCCESS:
    case YOUTUBE.FETCH_VIDEO_STATISTICS_FAILURE:
        return video_statistics(state, action);
    // handle replay list
    case YOUTUBE.ADD_REPLAY_LIST:
    case YOUTUBE.DELETE_REPLAY_LIST:
        return handle_replay_list(state, action);
    default:
        return { ...state };
    }
};

export default youtube;
