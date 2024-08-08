import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './evententity/event-list.component';
import { EventFormComponent } from './evententity/components/event-form/event-form.component';
import { EventModalComponent } from './evententity/components/event-modal/event-modal.component';
import { EventDayListComponent } from './eventday/eventday-list.component';
import { EventDayModalComponent } from './eventday/components/eventday-modal/eventday-modal.component';
import { EventDayFormComponent } from './eventday/components/eventday-form/eventday-form.component';

const COMPONENTS: any[] = [
  EventListComponent,
  EventFormComponent,
  EventModalComponent,
  EventDayListComponent,
  EventDayFormComponent,
  EventDayModalComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, EventsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class EventsModule {}
