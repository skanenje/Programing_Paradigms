// Handles the loading and display of comments for a specific post
function createCommentElement(comment, isNested = false) {
    const commentEl = document.createElement('div');
    commentEl.className = `comment ${isNested ? 'nested-comment' : ''}`;
    commentEl.innerHTML = `
        <div class="comment-meta">
            by ${comment.by} | ${new Date(comment.time * 1000).toLocaleString()}
        </div>
        <div>${comment.text}</div>
    `;
    return commentEl;

}
async function loadComments(postId) {
    const post = await fetchItem(postId);
    content.innerHTML = `
        <h2>${post.title}</h2>
        <div class="post-meta">
            by ${post.by} | ${new Date(post.time * 1000).toLocaleString()} | ${post.score} points
        </div>
        <div class="comments" id="comments"></div>
    `;

    const commentsContainer = document.getElementById('comments');

    async function loadComment(commentId, container, isNested = false) {
        const comment = await fetchItem(commentId);
        if (comment && !comment.deleted) {
            const commentEl = createCommentElement(comment, isNested);
            container.appendChild(commentEl);

            if (comment.kids) {
                for (const childId of comment.kids) {
                    await loadComment(childId, commentEl, true);
                }
            }
        }
    }

    if (post.kids) {
        for (const commentId of post.kids) {
            await loadComment(commentId, commentsContainer);
        }
    }
}
