import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventModel } from 'app/api/models';
import { EventService } from 'app/api/services';

// MODELS

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})
export class EventModalComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private dialogRef: MatDialogRef<EventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventModel
  ) {}

  async save(formData: any) {
    console.log(this.data);
    this.data.name = formData?.name;
    this.data.startDate = formData?.startDate;
    this.data.endDate = formData?.endDate;
    this.data.isLive = formData?.isLive;
    this.data.venueAddress1 = formData?.venueAddress1;
     this.data.id > 0
      ? await this.eventService.apiEventUpdateEventEntityPut$Json$Response({
          body:this.data
        }).subscribe(result =>{
          console.log(result.body);
          var event = result.body.result
          this.dialogRef.close({ success: result.body.isSuccess, eventData: event });
        })
      : await this.eventService.apiEventAddEventEntityPost$Json$Response({
        body:this.data
      }).subscribe(result =>{
        var event = result.body.result
        console.log(result.body);
        this.dialogRef.close({ success:  result.body.isSuccess, eventData: event });
      });
  }

  ngOnInit(): void {}
}
