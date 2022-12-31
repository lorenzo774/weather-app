type WeatherInfo = {
    result: {};
};

const WeatherInfo = ({ result }: WeatherInfo) => (
    <div>{JSON.stringify(result)}</div>
);

export default WeatherInfo;
