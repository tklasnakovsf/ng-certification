import {City, DailyForecast, Weather, WeatherTemp} from "./weather.models";

export interface FiveDaysForecast {
    cityName: string;
    list: NormalizedForecastList[];
}

export interface FiveDaysForecastResponse {
    city: City;
    list: DailyForecast[];
}

export interface WeatherForecastResponse {
    zipCode: string;
    name: string;
    weather: Weather;
    main: WeatherTemp;
}

export interface CommonWeatherData {
    tempMin: number;
    tempMax: number;
    weather: string;
    imageSrc: string;
}

export interface NormalizedForecastList extends CommonWeatherData {
    dt: number;
}

export interface NormalizedWeatherData extends CommonWeatherData {
    name: string;
    currentTemp: number;
    zipCode: string;
}


export interface ForecastData {
    cityName: string;
    list: NormalizedForecastList[];
}


