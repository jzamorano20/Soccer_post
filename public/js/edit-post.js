const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

// Update the post
const updateSoccerFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-update-soccer-post").value.trim();
    const content = document
        .querySelector("#content-update-soccer-post")
        .value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard"); // When successful, load the dashboard page
        } else {
            alert("Failed to update a post."); // When unsuccessful, show alert
        }
    }
};

// Delete the post
const deleteSoccerPostFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
        alert("Failed to delete a post."); // When unsuccessful, show alert
    }
};

// Event listeners
const updateSoccerPostButton = document.querySelector("#update-soccer-post");

if (updateSoccerPostButton) {
    updateSoccerPostButton.addEventListener("click", updateSoccerPostFormHandler);
}

const deleteSoccerPostButton = document.querySelector("#delete-soccer-post");

if (deleteSoccerPostButton) {
    deleteSoccerPostButton.addEventListener("click", deleteSoccerPostFormHandler);
}