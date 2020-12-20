import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiveDaysForecastComponent } from "./five-days-forecast.component";
import { routeIdName } from "../../shared/consts/common.consts";

const routes: Routes = [{ path: `:${routeIdName}`, component: FiveDaysForecastComponent }];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FiveDaysForecastRoutingModule { }
