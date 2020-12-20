import { NgModule } from "@angular/core";
import { FiveDaysForecastComponent } from "./five-days-forecast.component";
import { FiveDaysForecastRoutingModule } from "./five-days-forecast-routing.module";
import { UiModule } from "../../ui/ui.module";
import {DataService} from "../../shared/services/data/data.service";

@NgModule({
    declarations: [ FiveDaysForecastComponent ],
    imports: [
        FiveDaysForecastRoutingModule,
        UiModule
    ]
})
export class FiveDaysForecastModule {}
