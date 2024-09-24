// contains the functions that create and manipulate post elements.
function createPostElement(post) {
    const postEl = document.createElement('article');
    postEl.className = 'post-card';
    postEl.innerHTML = `
        <h2><a href="${post.url}" class="post-link" target="_blank">${post.title}</a></h2>
        <div class="post-meta">
            by ${post.by} | ${new Date(post.time * 1000).toLocaleString()} | ${post.score} points
        </div>
        <a href="#" class="post-link" data-post-id="${post.id}">${post.descendants || 0} comments</a>
    `;
    return postEl;
}

async function loadPosts(pageType) {
    const posts = await throttledFetchStories(pageType);

    if (currentPage === 0) {
        content.innerHTML = `<h2>${pageType.charAt(0).toUpperCase() + pageType.slice(1)}</h2>`;
    }
    posts.forEach(post => {
        const postEl = createPostElement(post);
        content.appendChild(postEl);
    });
    currentPage++;

    if (posts.length > 0) {
        lastPostId = posts[0].id;
    }

    loadMoreButton.style.display = posts.length === 20 ? 'block' : 'none';
}
