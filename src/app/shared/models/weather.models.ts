export interface DailyForecast {
    dt: number;
    temp: DailyTemp;
    weather: Weather;
}


export interface WeatherForecastResponse {
    zipCode: string;
    name: string;
    weather: Weather;
    main: WeatherTemp;
}

export interface WeatherTemp {
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface DailyTemp {
    min: number;
    max: number;
}

export interface Weather {
    main: string;
}

export interface CommonWeatherData {
    tempMin: number;
    tempMax: number;
    weather: string;
    imageSrc: string;
}

export interface NormalizedForecastList extends CommonWeatherData{
    dt: number;
}

export interface NormalizedWeatherData extends CommonWeatherData{
    name: string;
    currentTemp: number;
    zipCode: string;
}

export interface City {
    name: string;
}

