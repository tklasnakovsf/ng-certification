import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../shared/services/data/data.service";
import { FiveDaysForecast, FiveDaysForecastResponse } from "../../shared/models/data.models";
import { map, take } from "rxjs/operators";
import { normalizeForecastList } from "../../shared/utilities/array-utilities";
import { routeIdName } from "../../shared/consts/common.consts";
import { ForecastData } from "../../shared/models/data.models";

@Component({
    templateUrl: './five-days-forecast.component.html',
    selector: 'five-days-forecast'
})
export class FiveDaysForecastComponent implements OnInit {
    constructor(
        private dataService: DataService,
        private route: ActivatedRoute
    ) {}

    foreCastData: FiveDaysForecast;

    ngOnInit(): void {
        const zipCode = this.route.snapshot.paramMap.get(routeIdName);
        this.dataService.getFiveDaysForecast(zipCode)
            .pipe(
                take(1),
                map(({ list, city }: FiveDaysForecastResponse) => {
                    return {
                        list: normalizeForecastList(list),
                        cityName: city.name
                    }
                })
            )
            .subscribe(
                (data: ForecastData) => this.foreCastData = data,
                error => console.error(error));
    }
}
