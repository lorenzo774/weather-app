import {
    faSun,
    faMoon,
    faWind,
    faTemperature0,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type WeatherInfo = {
    info: {
        app_temp: number;
        city_name: string;
        country_code: string;
        sunrise: string;
        sunset: string;
        weather: {
            icon: string;
            description: string;
        };
        wind_spd: number;
    };
};

const WeatherInfo = ({ info }: WeatherInfo) => (
    <div className="weather">
        <div>
            <div className="locate">
                <p>
                    <b>{info.city_name}</b>, {info.country_code}
                </p>
            </div>
            <img src={`./icons/${info.weather.icon}.png`} />
            <p className="description">{info.weather.description}</p>
            <div className="temp">
                <FontAwesomeIcon icon={faTemperature0} />
                <p>{info.app_temp}°</p>
            </div>
            <div className="wind-speed">
                <FontAwesomeIcon icon={faWind} />
                <p>{info.wind_spd} m/s</p>
            </div>
        </div>
        <div className="sunrise-sunset">
            <div>
                <FontAwesomeIcon icon={faSun} />
                <p>{info.sunrise}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faMoon} />
                <p>{info.sunset}</p>
            </div>
        </div>
    </div>
);

export default WeatherInfo;
