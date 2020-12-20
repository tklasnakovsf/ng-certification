import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { defaultCountryCode, defaultDaysToShow } from "../../consts/common.consts";
import { ParamsEnum } from '../../enums/params.enum'
import { environment } from "../../../../environments/environment";
import { FiveDaysForecastResponse, WeatherForecastResponse } from "../../models/data.models";

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private httpClient: HttpClient) {}

    private apiUrl = 'https://api.openweathermap.org/data/2.5'
    private weatherApi = '/weather'
    private dailyApi = '/forecast/daily'

    getCurrentForecast(
        zipCode: string,
        countryCode: string = defaultCountryCode
    ): Observable<WeatherForecastResponse> {
        const endpoint = this.apiUrl + this.weatherApi;
        const params = new HttpParams()
            .set(ParamsEnum.Zip, `${zipCode},${countryCode}`)
            .set(ParamsEnum.AppId, environment.weatherApiKey);

        return this.httpClient.get<WeatherForecastResponse>(endpoint, {params}).pipe(
            catchError(this.handleError),
            map(response => {
                return {
                    ...response,
                    zipCode
                }
            })
        );
    }

    getFiveDaysForecast(
        zipCode: string,
        countryCode: string = defaultCountryCode,
        daysToShow: string = defaultDaysToShow
    ): Observable<FiveDaysForecastResponse> {
        const endpoint = this.apiUrl + this.dailyApi
        const params = new HttpParams()
            .set(ParamsEnum.Zip, `${zipCode},${countryCode}`)
            .set(ParamsEnum.Count, daysToShow)
            .set(ParamsEnum.AppId, environment.weatherApiKey);

        return this.httpClient.get<FiveDaysForecastResponse>(endpoint, {params})
            .pipe(
                catchError(this.handleError),
            );
    }

    getAllWeatherForecast(
        zipCodes: string[],
        countryCode: string = defaultCountryCode
    ): Observable<WeatherForecastResponse[]> {
       return forkJoin(zipCodes.map(zipCode => {
           return this.getCurrentForecast(zipCode, countryCode)
       }))
    }

    handleError({error}) {
       return throwError(error.message)
    }
}
