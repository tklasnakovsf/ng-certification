import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WeatherComponent } from "./core/weather/weather.component";


const routes: Routes = [
    { path: 'forecast', loadChildren: () => import('./core/five-days-forecast/five-days-forecast.module').then(m => m.FiveDaysForecastModule) },
    { path: '', component: WeatherComponent },
    { path: '**',  redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
