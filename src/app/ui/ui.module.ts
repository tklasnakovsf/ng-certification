import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CurrentForecastComponent } from "./current-forecast/current-forecast.component";
import { ForecastFormComponent } from "./forecast-form/forecast-form.component";
import { ForecastListComponent } from "./forecast-list/forecast-list.component";

@NgModule({
    declarations:[
        CurrentForecastComponent,
        ForecastFormComponent,
        ForecastListComponent
    ],
    exports: [
        CurrentForecastComponent,
        ForecastFormComponent,
        ForecastListComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
    ]
})
export class UiModule {}
