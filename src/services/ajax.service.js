import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export const searchChannelId = channel_id => {
    const params = {
        key: YOUTUBE_API_KEY,
        channelId: channel_id,
        part: 'snippet,id',
        order: 'date',
        maxResults: 50
    };
    return axios.get('/search', { params: params})
        .then(res => res)
        .catch(err => err);
};

export const getComments = video_id => {
    const params = {
        key: YOUTUBE_API_KEY,
        videoId: video_id,
        part: 'snippet,id',
        order: 'time',
        maxResults: 100
    };
    return axios.get('/commentThreads', { params: params })
        .then(res => res)
        .catch(err => err);
};
