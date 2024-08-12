import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxGaugeModule } from 'ngx-gauge';
import { AssignPassComponent } from './passes/assignpass/assignpass.component';
import { CheckPassComponent } from './passes/checkpass/checkpass.component';
import { UserFilterPipe } from '@core/pipes/UserFilterPipe';
import { CheckParkingEntryComponent } from './passes/checkparkingentry/checkparkingentry.component';

const COMPONENTS: any[] = [
  DashboardComponent,
  AssignPassComponent,
  CheckPassComponent,
  CheckParkingEntryComponent,
  LoginComponent,
  RegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule,NgChartsModule,NgApexchartsModule,NgxGaugeModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC,UserFilterPipe],
  providers: [
    UserFilterPipe,
  ],
})
export class RoutesModule {}
