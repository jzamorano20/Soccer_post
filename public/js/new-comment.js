const newSoccerCommentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());

    const content = document.querySelector('#content-new-soccer-comment').value.trim();

    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text: content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload(); 
        } else {
            console.log('Response status:', response.status);
            console.log('Response text:', await response.text());
            alert('Failed to create a comment.'); 
    }
};



// Event listeners
const newSoccerCommentForm = document.querySelector('.new-soccer-comment-form');
if (newSoccerCommentForm) {
    newSoccerCommentForm.addEventListener('submit', newSoccerCommentFormHandler);
};
};
