import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { UiModule } from "../../ui/ui.module";
import { WeatherComponent } from "./weather.component";
import { DataService } from "../../shared/services/data/data.service";

@NgModule({
    declarations: [
        WeatherComponent
    ],
    providers: [
        DataService
    ],
    imports: [
        HttpClientModule,
        UiModule
    ]
})
export class WeatherModule {}
