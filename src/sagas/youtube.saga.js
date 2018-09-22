import { toastr } from 'react-redux-toastr';
import { put, fork, take, call, all, select } from 'redux-saga/effects';

import { youtube } from 'Actions/';
import { ajax } from 'Services/';
import { YOUTUBE } from 'Constants/action_type.constant';

const getReplayListCount = state => state.youtube.replay_videos.length;
const getVideoByIndex = index => state => state.youtube.search_videos[index];

function* handleFetchChannelVideo() {
    for(;;) {
        const action = yield take(YOUTUBE.FETCH_CHANNEL_VIDEO_REQUEST);
        const response = yield call(ajax.searchChannelId, action.payload.channel_id);
        switch (response.status) {
        case 200:
            yield put(youtube.fetchChannelVideo.success(response.data));
            break;
        default:
            yield toastr.error('失敗', '通信失敗');
            yield put(youtube.fetchChannelVideo.failure());
        }
    }
}

function* handleFetchVideoComment() {
    for(;;) {
        const action = yield take(YOUTUBE.FETCH_COMMENTS_REQUEST);
        const response = yield call(ajax.getComments, action.payload.video_id);
        switch (response.status) {
        case 200:
            yield put(youtube.fetchComments.success(response.data, action.payload.replay_index));
            break;
        default:
            yield toastr.error('失敗', '通信失敗');
            yield put(youtube.fetchComments.failure());
        }
    }
}

function* handleFetchVideoStatistics() {
    for(;;) {
        const action = yield take(YOUTUBE.FETCH_VIDEO_STATISTICS_REQUEST);
        const response = yield call(ajax.getVideoStatistics, action.payload.video_id);
        switch (response.status) {
        case 200:
            yield put(youtube.fetchVideoStatistics.success(response.data, action.payload.replay_index));
            break;
        default:
            yield toastr.error('失敗', '通信失敗');
            yield put(youtube.fetchVideoStatistics.failure());
        }
    }
}

function* handleAddReplayList() {
    for(;;) {
        const action = yield take(YOUTUBE.ADD_REPLAY_LIST);
        const count = yield select(getReplayListCount);
        const video = yield select(getVideoByIndex(action.payload.video_index));
        yield put(youtube.fetchComments.request(video.video_id, count - 1));
        yield put(youtube.fetchVideoStatistics.request(video.video_id, count - 1));
    }
}

function* youtubeSaga() {
    yield all([
        fork(handleFetchChannelVideo),
        fork(handleFetchVideoComment),
        fork(handleFetchVideoStatistics),
        fork(handleAddReplayList)
    ]);
}


export default youtubeSaga;
