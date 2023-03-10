// Logout request
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/'); // When successful, load the homepage
  } else {
    alert('Failed to log out.'); // When unsuccessful, show alert
  }
};


// Event listener
document
  .querySelector('#logout')
  .addEventListener('click', logout);
