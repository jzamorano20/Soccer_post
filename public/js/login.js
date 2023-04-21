const soccerLoginFormHandler = async (event) => {
    event.preventDefault();
    // Get the values of the username and password input fields
    const username = document.querySelector('#username-soccer-login').value.trim();
    const password = document.querySelector('#password-soccer-login').value.trim();

    if (username && password) {
        // Send a POST request to the login endpoint with the input values as JSON data
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        // redirect to the homepage if works
        if (response.ok) {
            document.location.replace('/'); 
        } else {
            alert('Failed to log in.'); // unsucceful
        }
    }
};

// Event listener for the blog login form
const soccerLoginForm = document.querySelector('.soccer-login-form');
if (soccerLoginForm) {
    soccerLoginForm.addEventListener('submit', soccerLoginFormHandler);
}