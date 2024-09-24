// handles fetching stories and individual items from the Hacker News API
import { throttle } from './throttle.js';
const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';
async function fetchItem(id) {
    const response = await axios.get(`${API_BASE_URL}/item/${id}.json`);
    return response.data;
}

async function fetchStories(pageType, currentPage = 0) {
    let endpoint;
    switch (pageType) {
        case 'stories':
            endpoint = 'newstories';
            break;
        case 'jobs':
            endpoint = 'jobstories';
            break;
        case 'polls':
            endpoint = 'topstories'; // We'll filter for polls later
            break;
        default:
            endpoint = 'newstories';
    }

    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}.json`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const storyIds = await response.json();
        const start = currentPage * 20;
        const end = start + 20;
        const newPosts = await Promise.all(storyIds.slice(start, end).map(id => fetchItem(id)));

        if (pageType === 'polls') {
            return newPosts.filter(post => post.type === 'poll');
        }

        return newPosts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

const throttledFetchStories = throttle(fetchStories, 1000);
export { fetchItem, fetchStories, throttledFetchStories };
