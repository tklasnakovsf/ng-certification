import {Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    templateUrl: './forecast-form.component.html',
    selector: 'forecast-form'
})
export class ForecastFormComponent {
    zipCode = ''
    @Output() submitZipCode = new EventEmitter<string>();
    @Output() removeWarning = new EventEmitter()
    @Input() warning: string;

    addNewLocation() {
        this.submitZipCode.emit(this.zipCode)
    }

    removeValidation() {
        this.removeWarning.emit();
    }
}
