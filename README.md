# 🌤️ Weather App

A simple full-stack weather application built with Node.js, Express, EJS, and Axios.
Users can search for a city and view current weather conditions along with a short-term forecast.

---

## 🌐 Live Demo

View the live project here:  
https://weather-app-rxw5.onrender.com/

---

## 🚀 Features

- Search weather by city name
- Current weather:
  - Temperature
  - Feels like
  - Condition
  - Humidity
  - Wind speed

- 3-day forecast (sampled from 5-day / 3-hour API)
- Dynamic rendering with EJS
- Responsive UI

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS
- Axios
- OpenWeather API

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/ValeriaBrizzolari/weather-app.git
cd weather-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder and add your API key:

```env
API_KEY=your_openweather_api_key_here
```

4. Install dotenv:

```bash
npm install dotenv
```

5. Start the server:

```bash
node index.js
```

6. Open in browser:

```
http://localhost:3000
```

---

## 🔑 API

This project uses the OpenWeather API:

- Current Weather Data API
- 5 Day / 3 Hour Forecast API

Get your free API key here:
https://openweathermap.org/api

---

## 🧠 What I Learned

- Making API calls with Axios
- Handling query parameters
- Using async/await
- Rendering dynamic data with EJS
- Processing API data for UI

---

## 📌 Notes

- Forecast data is sampled every 24 hours from the 3-hour API
- Do NOT expose your API key publicly

---

## 💡 Future Improvements

- Better date formatting
- Weather icons and animations
- Improved error handling
- Deploy the app online

---
