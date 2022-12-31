import { useState } from "react";
import { weatherByCity } from "./api/weather";
import LoadingSpinner from "./components/LoadingSpinner";
import Search from "./components/Search";
import WeatherList from "./components/WeatherList";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ data: [] }>({ data: [] });

    const search = async (city: string, country: string) => {
        setLoading(true);
        const data = await weatherByCity(city, country);
        setResult(data);
        setLoading(false);
    };

    return (
        <>
            <header>
                <h1>Weather App</h1>
            </header>
            <Search onSearch={search} />
            <main>
                {!loading ? (
                    <WeatherList infos={result.data} />
                ) : (
                    <LoadingSpinner />
                )}
            </main>
        </>
    );
};

export default App;
