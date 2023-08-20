# Fetching and Displaying User Data

This project consists of JavaScript functions to fetch user data from an API, display user information in styled cards, and provide search functionality to filter users based on a search term.

## Table of Contents

- [Purpose](#purpose)
- [Usage](#usage)
- [Functions](#functions)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Purpose

The purpose of this project is to demonstrate how to fetch user data from an API, display it in styled cards, and implement a search functionality to filter users based on their names.

## Usage

1. Open `index.html` in a web browser.
2. The page will display a loading message while fetching user data from the API.
3. Once the data is fetched, user information will be displayed in styled cards.
4. Enter a search term in the search bar to filter users by name.

## Functions

### `fetchUserData()`

This function fetches user data from the API, handles errors, and updates the `allUsers` global variable.

### `renderUsers(users)`

This function displays user information in styled cards. It checks the loading state and displays appropriate messages.

### `filterUsers()`

This function filters and displays user cards based on the search term provided in the search bar.

### `displayErrorMessage(message)`

This function displays error messages to the user.

## Getting Started

To run this project locally:

1. Clone this repository: `git clone https://github.com/yourusername/user-data-fetch.git`
2. Navigate to the project directory: `cd user-data-fetch`
3. Open `index.html` in a web browser.

## Contributing

Contributions are welcome! If you find a bug or want to enhance the functionality, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
