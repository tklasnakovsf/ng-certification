export interface DailyForecast {
    dt: number;
    temp: DailyTemp;
    weather: Weather;
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



export interface City {
    name: string;
}

