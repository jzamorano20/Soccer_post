const soccerLogout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/'); 
    } else {
        alert('Failed to log out.'); 
    }
};
//event listener to the logout button
const soccerLogoutButton = document.querySelector('soccer-logout');
if (soccerLogoutButton) {
    soccerLogoutButton.addEventListener('click', soccerLogout);
}