import {
    DailyForecast,
    NormalizedForecastList, NormalizedWeatherData,
    Weather, WeatherTemp
} from "../models/weather.models";
import {
    imageFileExtension,
    imagesUrl,
    millisecondsInSec
} from "../consts/common.consts";
import { WeatherEnum } from "../enums/weather.enum";

export function normalizeForecastList (list: DailyForecast[]): NormalizedForecastList[] {
    return list.map(listItem => {
        return {
            dt: listItem.dt * millisecondsInSec,
            tempMin: listItem.temp.min,
            tempMax: listItem.temp.max,
            weather: listItem.weather[0].main,
            imageSrc: `${imagesUrl}${WeatherEnum[listItem.weather[0].main] || ''}${imageFileExtension}`
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
