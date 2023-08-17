let isLoading = true;
let allUsers = [];

async function loadUserData() {
  try {
    isLoading = true;

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    allUsers = data;

    renderUsers(allUsers);

    isLoading = false;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
}

