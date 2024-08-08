import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './evententity/event-list.component';
import { EventDayListComponent } from './eventday/eventday-list.component';

const routes: Routes = [
  {
    path: 'evententity',
    component: EventListComponent,
  },
  {
    path: 'eventday',
    component: EventDayListComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
