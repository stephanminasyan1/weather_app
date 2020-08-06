import axios from "axios";
import EndpointFactory from "axios-endpoints";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../utils/config";

const axiosWeatherInstance = axios.create({
    baseURL: WEATHER_API_URL,
    responseType: "json",
});

const WeatherEndpoint = EndpointFactory(axiosWeatherInstance);

export default {
    getLocaleData: (lat: string, lon: string): any => {
        return new WeatherEndpoint(
            `/locations/v1/cities/geoposition/search?apikey=${WEATHER_API_KEY}&q=${lat}, ${lon}&details=true`
        );
    },
    getWeather: (locationKey: string): any =>
        new WeatherEndpoint(
            `/forecasts/v1/daily/5day/${locationKey}.json?apikey=${WEATHER_API_KEY}`
        ),
};
