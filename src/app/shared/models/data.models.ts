import { City, DailyForecast, NormalizedForecastList} from "./weather.models";

export interface FiveDaysForecast {
    cityName: string;
    list: NormalizedForecastList[];
}

export interface FiveDaysForecastResponse {
    city: City;
    list: DailyForecast[];
}


