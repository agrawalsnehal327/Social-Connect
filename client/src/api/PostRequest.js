import axios from 'axios';

const API = axios.create({ baseURL: 'https://social-connect-r4my.onrender.com' });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) => API.put(`post/${id}/like_dislike`, { userId: userId })