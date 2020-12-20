import { Component, OnInit } from "@angular/core";
import { DataService } from "../../shared/services/data/data.service";
import { LocalStorageService } from "../../shared/services/local-storage/local-storage.service";
import { map, take } from "rxjs/operators";
import { normalizeForecastData } from "../../shared/utilities/array-utilities";
import { NormalizedWeatherData, WeatherForecastResponse } from "../../shared/models/weather.models";
import {cityInListWarning, localStorageZipCodesKeyName} from "../../shared/consts/common.consts";

@Component({
    templateUrl: './weather.component.html',
    selector: 'weather'
})
export class WeatherComponent implements OnInit{
    constructor(
        private dataService: DataService,
        private localStorageService: LocalStorageService
    ) {}
    locationsZipCodeList: string[] = [];
    locationsList: NormalizedWeatherData[] = [];
    warning = '';

    addNewLocation(locationZipCode): void {
        if (this.locationsZipCodeList.includes(locationZipCode)) {
            this.warning = cityInListWarning;
            return;
        }
        this.dataService.getCurrentForecast(locationZipCode)
            .pipe(
                take(1),
                map(({name, main, weather, zipCode}: WeatherForecastResponse) => {
                    return normalizeForecastData(name, main, zipCode, weather);
                })
            )
            .subscribe(data => {
                this.addItemsToStorage(locationZipCode);
                this.locationsList.unshift(data);
            }, error => {
                this.warning = error;
                console.log(error)
            });
    }

    addItemsToStorage(data): void {
        this.locationsZipCodeList.unshift(data);
        this.localStorageService.setItems(this.locationsZipCodeList);
    }

    removeWeatherItem(zipCode) {
        this.locationsList = this.locationsList.filter(location =>
            location.zipCode !== zipCode);
        this.locationsZipCodeList = this.locationsZipCodeList.filter(locationZipCode =>
            locationZipCode !== zipCode);
        this.localStorageService.setItems(this.locationsZipCodeList);
    }

    ngOnInit(): void {
        this.locationsZipCodeList = this.localStorageService.getItems(localStorageZipCodesKeyName) || [] ;
        this.dataService.getAllWeatherForecast(this.locationsZipCodeList)
            .pipe(
                take(1),
                map((data: WeatherForecastResponse[]) => {
                  return data.map(({ name, main, weather, zipCode }: WeatherForecastResponse): NormalizedWeatherData => {
                      return normalizeForecastData(name, main, zipCode, weather)
                  })
                })
            )
            .subscribe(data => {
                this.locationsList = data;
            }, error => {
                console.error(error);
            });
    }

    removeWarning(): void {
        this.warning = '';
    }
}
