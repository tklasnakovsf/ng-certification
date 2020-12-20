import { Component, Input } from "@angular/core";
import { NormalizedForecastList } from "../../shared/models/data.models";
import { dateFormat } from "../../shared/consts/common.consts";

@Component({
    templateUrl: './forecast-list.component.html',
    selector: 'forecast-list'
})
export class ForecastListComponent {
    @Input() forecastList: NormalizedForecastList[];
    formatDate = dateFormat;

    trackByZipCode(index): number {
        return index;
    }
}
