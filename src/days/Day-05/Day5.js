
import { useEffect, useState } from "react";

function Day5() {
  const [city, setCity] = useState("Chennai");
  const [searchCity, setSearchCity] = useState("Chennai");

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch weather whenever searchCity changes
  useEffect(() => {
    const fetchWeather = async () => {
      if (!searchCity.trim()) {
        setError("Please enter a city name");
        setWeather(null);
        return;
      }

      try {
        setLoading(true);
        setError("");
        setWeather(null);

        // Step 1: Get city coordinates
        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            searchCity
          )}&count=1&language=en&format=json`
        );

        if (!geoResponse.ok) {
          throw new Error("Unable to search for this city");
        }

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
          throw new Error("City not found. Try another city.");
        }

        const location = geoData.results[0];

        // Step 2: Get weather using latitude and longitude
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`
        );

        if (!weatherResponse.ok) {
          throw new Error("Unable to fetch weather data");
        }

        const weatherData = await weatherResponse.json();

        setCity(
          `${location.name}${location.country ? `, ${location.country}` : ""}`
        );

        setWeather(weatherData.current);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [searchCity]);

  // Search button
  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchCity.trim()) {
      setError("Please enter a city name");
      return;
    }

    setSearchCity(searchCity.trim());
  };

  // Convert weather code into a description
  const getWeatherDescription = (code) => {
    if (code === 0) return "Clear Sky";
    if ([1, 2, 3].includes(code)) return "Partly Cloudy";
    if ([45, 48].includes(code)) return "Foggy";
    if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
    if ([61, 63, 65, 66, 67].includes(code)) return "Rainy";
    if ([71, 73, 75, 77].includes(code)) return "Snowy";
    if ([80, 81, 82].includes(code)) return "Rain Showers";
    if ([85, 86].includes(code)) return "Snow Showers";
    if ([95, 96, 99].includes(code)) return "Thunderstorm";
    return "Weather Unavailable";
  };

  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if ([1, 2, 3].includes(code)) return "⛅";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
    if ([95, 96, 99].includes(code)) return "⛈️";
    return "🌤️";
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-white px-4 py-10">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-3">
            Weather App
          </h1>

          <p className="text-gray-400">
            React useEffect + API Fetching + Tailwind CSS
          </p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex gap-3 mb-8"
        >
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 min-w-0 bg-[#151B2B] border border-gray-600 rounded-xl px-4 py-3 outline-none focus:border-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 px-6 py-3 rounded-xl font-semibold transition"
          >
            Search
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <div className="text-center py-10">
            <div className="text-4xl mb-3 animate-pulse">🌤️</div>
            <p className="text-blue-400">Loading weather...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="bg-rose-500/10 border border-rose-500 text-rose-400 p-4 rounded-xl text-center">
            {error}
          </div>
        )}

        {/* Weather Data */}
        {!loading && !error && weather && (
          <div className="bg-[#151B2B] border border-blue-500/30 rounded-3xl p-6 md:p-10 shadow-xl">

            <div className="text-center mb-8">

              <p className="text-gray-400 text-lg mb-3">
                {city}
              </p>

              <div className="text-7xl mb-4">
                {getWeatherIcon(weather.weather_code)}
              </div>

              <h2 className="text-5xl font-bold mb-3">
                {Math.round(weather.temperature_2m)}°C
              </h2>

              <p className="text-blue-400 text-xl font-semibold">
                {getWeatherDescription(weather.weather_code)}
              </p>

              <p className="text-gray-400 mt-2">
                Feels like {Math.round(weather.apparent_temperature)}°C
              </p>

            </div>

            {/* Weather Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-[#080B12] p-5 rounded-xl text-center">
                <div className="text-3xl mb-2">💧</div>
                <p className="text-gray-400 text-sm">Humidity</p>
                <h3 className="text-2xl font-bold text-blue-400">
                  {weather.relative_humidity_2m}%
                </h3>
              </div>

              <div className="bg-[#080B12] p-5 rounded-xl text-center">
                <div className="text-3xl mb-2">💨</div>
                <p className="text-gray-400 text-sm">Wind Speed</p>
                <h3 className="text-2xl font-bold text-blue-400">
                  {weather.wind_speed_10m} km/h
                </h3>
              </div>

              <div className="bg-[#080B12] p-5 rounded-xl text-center">
                <div className="text-3xl mb-2">🌧️</div>
                <p className="text-gray-400 text-sm">Precipitation</p>
                <h3 className="text-2xl font-bold text-blue-400">
                  {weather.precipitation} mm
                </h3>
              </div>

            </div>

            <p className="text-gray-500 text-xs text-center mt-6">
              Weather data provided by Open-Meteo
            </p>

          </div>
        )}

        {/* Footer */}
        <p className="text-center text-gray-500 mt-10">
          Built with React and Tailwind CSS
        </p>

      </div>
    </div>
  );
}

export default Day5;
