import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './evententity/event-list.component';
import { TicketPassListComponent } from './ticketpass/ticketpass-list.component';

const routes: Routes = [
  {
    path: 'evententity',
    component: EventListComponent,
  },
  {
    path: 'passes',
    component: TicketPassListComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
