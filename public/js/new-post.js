const newSoccerPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-soccer-post').value.trim();
    const content = document.querySelector('#content-new-soccer-post').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard'); 
        } else {
            alert('Failed to create a new post.'); 
        }
    }
};

const newSoccerPostForm = document.querySelector('.new-soccer-post-form');
if (newSoccerPostForm) {
    newSoccerPostForm.addEventListener('submit', newSoccerPostFormHandler);
}