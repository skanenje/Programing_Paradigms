//  Checks for new stories and provides live updates.
import { throttle } from './throttle.js';
const checkForUpdates = throttle(async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/newstories.json`);
        const latestStories = response.data;
        const latestStory = await fetchItem(latestStories[0]);
        if (latestStory.id !== lastPostId) {
            liveUpdateContainer.textContent = `New story: ${latestStory.title} - by ${latestStory.by}`;
            liveUpdateContainer.style.display = 'block';
        }
    } catch (error) {
        console.error('Error checking for updates:', error);
    }
}, 5000);
let updateInterval;

function initializeLiveUpdates(updateCallback, interval) {
    updateInterval = setInterval(updateCallback, interval);
}

function stopLiveUpdates() {
    clearInterval(updateInterval);
}

export { initializeLiveUpdates, stopLiveUpdates };