import { useState } from "react";
import { weatherByCity } from "./api/weather";
import Search from "./components/Search";
import WeatherInfo from "./components/WeatherInfo";

const App = () => {
    const [result, setResult] = useState<{}>({});

    const search = async (city: string) => {
        const data = await weatherByCity(city, "it");
        console.log(data);
        setResult(data);
    };

    return (
        <>
            <header>
                <h1>Weather App</h1>
            </header>
            <Search onSearch={search} />
            <WeatherInfo result={result} />
        </>
    );
};

export default App;
