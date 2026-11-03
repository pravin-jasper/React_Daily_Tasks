# React Fetch and Search Users App 👥

A responsive User Dashboard built using React.js, JavaScript, and Tailwind CSS. This project demonstrates API integration, React Hooks, searching, and dynamic data rendering.

## 🚀 Features

- Fetch user information from an external API.
- Display a list of users.
- Show user name and username.
- Display email address and phone number.
- Display website information.
- Show company details.
- Display address and city.
- Search users by name.
- Search users by username.
- Search users by email.
- Search users by city.
- Display the number of matching users.
- Show loading messages while fetching data.
- Handle API errors.
- Provide a retry button if fetching fails.
- Display a message when no users match the search.
- Responsive UI for mobile and desktop devices.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- JSX
- JSONPlaceholder Users API

## 📚 React Concepts Practiced

| Concept | Usage |
|---|---|
| `useState()` | Store users, loading, error, and search states |
| `useEffect()` | Fetch users when the component loads |
| `fetch()` | Connect to the users API |
| `async/await` | Handle asynchronous API requests |
| `try/catch/finally` | Handle API errors and loading state |
| `onChange` | Handle search input changes |
| `filter()` | Filter users based on the search value |
| `map()` | Display user cards dynamically |
| `includes()` | Check whether user details match the search |
| `toLowerCase()` | Make searching case-insensitive |
| Conditional Rendering | Display loading, errors, and user data |

## 🌐 API Integration

This project uses the free JSONPlaceholder API. No API key is required.

### 1. Users API

Fetches a list of users with their personal and company information.

Example:

```text
https://jsonplaceholder.typicode.com/users
```

API Documentation:

- https://jsonplaceholder.typicode.com/guide/

## ⚙️ Installation and Setup

### 1. Navigate to the project folder

```bash
cd day6
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Tailwind CSS

For Tailwind CSS v4 with Vite:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## 🎯 Learning Objectives

- Understand React Hooks.
- Learn how to use `useEffect()`.
- Fetch data from an external API.
- Understand asynchronous JavaScript.
- Work with JSON API responses.
- Understand the difference between `map()` and `filter()`.
- Implement search functionality in React.
- Handle loading and error states.
- Display dynamic data using React.
- Build responsive UI using Tailwind CSS.

## 🔮 Future Improvements

- Add sorting by name.
- Add filtering by company.
- Add pagination.
- Add individual user profile pages.
- Add a refresh button.
- Add dark and light mode.
- Add more user details.
- Add a debounce feature to search.
