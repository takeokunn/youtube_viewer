import { YOUTUBE } from 'Constants/action_type.constant';

const action = (type, payload = {}) => ({ type, payload });

export const fetchChannelVideo = {
    request: channel_id => action(YOUTUBE.FETCH_CHANNEL_VIDEO_REQUEST, { channel_id: channel_id }),
    success: data => action(YOUTUBE.FETCH_CHANNEL_VIDEO_SUCCESS, { data: data }),
    failure: () => action(YOUTUBE.FETCH_CHANNEL_VIDEO_FAILURE)
};

export const fetchComments = {
    request: (video_id, replay_index) => action(YOUTUBE.FETCH_COMMENTS_REQUEST, { video_id: video_id, replay_index: replay_index }),
    success: (data, replay_index) => action(YOUTUBE.FETCH_COMMENTS_SUCCESS, { data: data, replay_index: replay_index }),
    failure: () => action(YOUTUBE.FETCH_COMMENTS_FAILURE)
};

export const fetchVideoStatistics = {
    request: (video_id, replay_index) => action(YOUTUBE.FETCH_VIDEO_STATISTICS_REQUEST, { video_id: video_id, replay_index: replay_index }),
    success: (data, replay_index) => action(YOUTUBE.FETCH_VIDEO_STATISTICS_SUCCESS, { data: data, replay_index: replay_index }),
    failure: () => action(YOUTUBE.FETCH_VIDEO_STATISTICS_FAILURE)
};

export const handleReplayList = {
    add: video_index => action(YOUTUBE.ADD_REPLAY_LIST, { video_index: video_index }),
    delete: replay_index => action(YOUTUBE.DELETE_REPLAY_LIST, { replay_index: replay_index }),
};
