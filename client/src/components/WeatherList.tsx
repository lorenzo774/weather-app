import WeatherInfo from "./WeatherInfo";

type WeatherListProps = {
    infos: [];
};

const WeatherList = ({ infos }: WeatherListProps) => (
    <div className="weather-list">
        {infos.map((info) => (
            <WeatherInfo info={info} />
        ))}
    </div>
);

export default WeatherList;
