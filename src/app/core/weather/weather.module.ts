import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { UiModule } from "../../ui/ui.module";
import { WeatherComponent } from "./weather.component";

@NgModule({
    declarations: [
        WeatherComponent
    ],
    imports: [
        HttpClientModule,
        UiModule
    ]
})
export class WeatherModule {}
