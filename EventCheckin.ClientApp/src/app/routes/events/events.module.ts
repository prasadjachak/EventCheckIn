import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './evententity/event-list.component';
import { EventFormComponent } from './evententity/components/event-form/event-form.component';
import { EventModalComponent } from './evententity/components/event-modal/event-modal.component';
import { TicketPassListComponent } from './ticketpass/ticketpass-list.component';
import { TicketPassFormComponent } from './ticketpass/components/ticketpass-form/ticketpass-form.component';
import { TicketPassModalComponent } from './ticketpass/components/ticketpass-modal/ticketpass-modal.component';
import { MemberEventComponent } from './evententity/components/member-event/member-event.component';
import { MemberEventModalComponent } from './evententity/components/member-event-modal/member-event-modal.component';

const COMPONENTS: any[] = [
  EventListComponent,
  EventFormComponent,
  EventModalComponent,
  TicketPassListComponent,
  TicketPassFormComponent,
  TicketPassModalComponent,
  MemberEventComponent,
  MemberEventModalComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, EventsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class EventsModule {}
