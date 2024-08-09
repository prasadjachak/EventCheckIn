import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckPassComponent } from './checkpass/checkpass.component';
import { AssignPassComponent } from './assignpass/assignpass.component';

const routes: Routes = [
  {
    path: 'checkpass',
    component: CheckPassComponent,
  },
  {
    path: 'assignpass',
    component: AssignPassComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassesRoutingModule {}
