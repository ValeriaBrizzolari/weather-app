import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;
const app = express();
const port = process.env.PORT || 3000;
const CURRENT_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/weather", async (req, res) => {
  const city = req.body.city;
  try {
    const currentResponse = await axios.get(CURRENT_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    const forecastResponse = await axios.get(FORECAST_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    const current = currentResponse.data;
    const forecast = forecastResponse.data;
    const daily = [forecast.list[0], forecast.list[8], forecast.list[16]];

    res.render("index", {
      city: current.name,
      temp: current.main.temp,
      description: current.weather[0].description,
      feelsLike: current.main.feels_like,
      icon: current.weather[0].icon,
      humidity: current.main.humidity,
      windSpeed: current.wind.speed,
      forecast: daily,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
