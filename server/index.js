const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");

// SET APP
app.use(
    cors({
        origin: process.env.ORIGIN,
    })
);
app.use(express.json());

app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}`)
);

// Get the weather by the coords
const getWeatherByCoords = async (lat, lon) => {
    const response = await fetch(
        `${process.env.ENDPOINT}?lat=${lat}&lon=${lon}&key=${process.env.API_KEY}`
    );
    return await response.json();
};

const getWeatherByCity = async (city, country) => {
    const response = await fetch(
        `${process.env.ENDPOINT}?city=${city}&country=${country}&key=${process.env.API_KEY}`
    );
    return await response.json();
};

// /weather endpoint
app.get("/weather", async (req, res, _) => {
    const { lat, lon, city, country } = req.query;
    try {
        if (lat && lon) {
            const data = await getWeatherByCoords(lat, lon);
            return res.json(data);
        }
        if (city && country) {
            const data = await getWeatherByCity(city, country);
            return res.json(data);
        }
        return res.status(400).json({ message: "No query provided" });
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" });
    }
});
