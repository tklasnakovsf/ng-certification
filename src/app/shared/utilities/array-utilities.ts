import {
    DailyForecast,
    Weather, WeatherTemp
} from "../models/weather.models";
import {
    imageFileExtension,
    imagesUrl,
    millisecondsInSec
} from "../consts/common.consts";
import { WeatherEnum } from "../enums/weather.enum";
import { NormalizedForecastList, NormalizedWeatherData } from "../models/data.models";

export function normalizeForecastList (list: DailyForecast[]): NormalizedForecastList[] {
    return list.map(({ dt, temp, weather}) => {
        return {
            dt: dt * millisecondsInSec,
            tempMin: temp.min,
            tempMax: temp.max,
            weather: weather[0].main,
            imageSrc: `${imagesUrl}${WeatherEnum[weather[0].main] || ''}${imageFileExtension}`
        }
    })
}

export function normalizeForecastData (
    name: string,
    { temp, temp_max, temp_min }: WeatherTemp,
    locationZipCode: string,
    weather: Weather
): NormalizedWeatherData {
    return {
        name,
        currentTemp: temp,
        tempMax: temp_max,
        tempMin: temp_min,
        zipCode: locationZipCode,
        weather: weather[0].main,
        imageSrc: `${imagesUrl}${WeatherEnum[weather[0].main] || ''}${imageFileExtension}`
    }
}
