import {Component, Output, EventEmitter, Input} from "@angular/core";
import {NormalizedWeatherData} from "../../shared/models/weather.models";

@Component({
    templateUrl: './current-forecast.component.html',
    selector: 'current-forecast'
})
export class CurrentForecastComponent {
    @Output() removeItem = new EventEmitter();
    @Input() locationsList: NormalizedWeatherData[] = [];

    removeWeatherItem(zipCode: string): void {
        this.removeItem.emit(zipCode);
    }

    trackByZipCode(index, item): string {
        return item.zipCode;
    }
}
