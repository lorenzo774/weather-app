import { faCloud, faWind } from "@fortawesome/free-solid-svg-icons";
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
        <div className="locate">
            <p>
                <b>{info.city_name}</b>, {info.country_code}
            </p>
        </div>
        <div className="info">
            <img src={`./icons/${info.weather.icon}.png`} />
            <p>{info.weather.description}</p>
            <p>{info.app_temp}°</p>
        </div>
        <div className="wind-speed">
            <FontAwesomeIcon icon={faWind} />
            <p>{info.wind_spd} m/s</p>
        </div>
        <div className="sunrise-sunset">
            <p>Sunrise: {info.sunrise}</p>
            <p>Sunset: {info.sunset}</p>
        </div>
    </div>
);

export default WeatherInfo;
