const deletePost = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {//will refresh page if works
        document.location.reload(); 
    } else {
        alert("Failed to delete the post."); //unsuccessful, show alert
    }
};

const deletePostHandler = (event) => {
    if (event.target.matches(".delete-post")) {
        const post_id = event.target.getAttribute("data-post-id");
        deletePost(post_id);
    }
};

document.addEventListener("click", deletePostHandler);