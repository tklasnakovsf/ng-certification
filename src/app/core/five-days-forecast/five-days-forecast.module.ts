import { NgModule } from "@angular/core";
import { FiveDaysForecastComponent } from "./five-days-forecast.component";
import { FiveDaysForecastRoutingModule } from "./five-days-forecast-routing.module";
import { UiModule } from "../../ui/ui.module";

@NgModule({
    declarations: [ FiveDaysForecastComponent ],
    imports: [
        FiveDaysForecastRoutingModule,
        UiModule
    ]
})
export class FiveDaysForecastModule {}
