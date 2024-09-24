// handles the initial loading of posts and sets up the interval for live updates.
// Initial load
loadPosts('stories');

// Check for updates every 5 seconds
setInterval(checkForUpdates, 5000);
