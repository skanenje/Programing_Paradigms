// manages event listeners for navigation, comments, theme toggle, and loading more posts.
// Handle navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        currentPageType = page;
        currentPage = 0;
        content.innerHTML = '';
        loadPosts(page);
    });
});

// Handle comment links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[data-post-id]')) {
        e.preventDefault();
        const postId = e.target.dataset.postId;
        loadComments(postId);
    }
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
});

// Load More button
loadMoreButton.addEventListener('click', () => loadPosts(currentPageType));
