import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PassesRoutingModule } from './passes-routing.module';
import { AssignPassComponent } from './assignpass/assignpass.component';
import { CheckPassComponent } from './checkpass/checkpass.component';

const COMPONENTS: any[] = [
  AssignPassComponent,
  CheckPassComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, PassesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class PassesModule {}
