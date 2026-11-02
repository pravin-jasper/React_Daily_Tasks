# React Weather App 🌤️

A responsive Weather Application built using React.js, JavaScript, and Tailwind CSS. This project demonstrates API integration, React Hooks, and dynamic data rendering.

## 🚀 Features

- Search weather by city name.
- Fetch live weather information using an API.
- Display current temperature.
- Display feels-like temperature.
- Display humidity.
- Display wind speed.
- Display precipitation.
- Show weather conditions with icons.
- Display loading messages while fetching data.
- Handle API errors and invalid city names.
- Responsive UI for mobile and desktop devices.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- JSX
- Open-Meteo Weather API
- Open-Meteo Geocoding API

## 📚 React Concepts Practiced

| Concept | Usage |
|---|---|
| `useState()` | Store city, weather, loading, and error states |
| `useEffect()` | Fetch weather data when the searched city changes |
| `fetch()` | Connect to the weather API |
| `async/await` | Handle asynchronous API requests |
| `try/catch/finally` | Handle API errors and loading state |
| `onChange` | Handle city input changes |
| `onSubmit` | Handle search form submission |
| Conditional Rendering | Display loading, errors, and weather data |
| Template Literals | Build API request URLs |

## 🌐 API Integration

This project uses the free Open-Meteo API. No API key is required.

### 1. Geocoding API

Converts a city name into latitude and longitude.

Example:

```text
https://geocoding-api.open-meteo.com/v1/search?name=Chennai&count=1&language=en&format=json
```

### 2. Weather API

Fetches current weather information using latitude and longitude.

Example:

```text
https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto
```

API Documentation:

- https://open-meteo.com/en/docs
- https://open-meteo.com/en/docs/geocoding-api



## ⚙️ Installation and Setup


### 1. Navigate to the project folder

```bash
cd weather-app
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
- Fetch data from external APIs.
- Understand asynchronous JavaScript.
- Work with JSON API responses.
- Handle loading and error states.
- Display dynamic data in React.
- Build responsive UI using Tailwind CSS.

## 🔮 Future Improvements

- Add a 7-day weather forecast.
- Add hourly weather updates.
- Add current location weather.
- Add weather animations.
- Add recent city search history.
- Add dark and light mode.
- Add temperature conversion between Celsius and Fahrenheit.

