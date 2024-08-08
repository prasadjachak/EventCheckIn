import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventDayModel } from 'app/api/models';
import { EventDayService } from 'app/api/services';

// MODELS

@Component({
  selector: 'app-eventday-modal',
  templateUrl: './eventday-modal.component.html',
  styleUrls: ['./eventday-modal.component.scss'],
})
export class EventDayModalComponent implements OnInit {
  constructor(
    private eventdayService: EventDayService,
    private dialogRef: MatDialogRef<EventDayModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventDayModel
  ) {}

  async save(formData: any) {
    console.log(this.data);
    this.data.eventDayName = formData?.eventDayName;
    this.data.startDate = formData?.startDate;
    this.data.endDate = formData?.endDate;
    this.data.eventId = formData?.eventId;
     this.data.id > 0
      ? await this.eventdayService.apiEventDayUpdateEventDayPut$Json$Response({
          body:this.data
        }).subscribe(result =>{
          console.log(result.body);
          var eventday = result.body.result
          this.dialogRef.close({ success: result.body.isSuccess, eventdayData: eventday });
        })
      : await this.eventdayService.apiEventDayAddEventDayPost$Json$Response({
        body:this.data
      }).subscribe(result =>{
        var eventday = result.body.result
        console.log(result.body);
        this.dialogRef.close({ success:  result.body.isSuccess, eventData: event });
      });
  }

  ngOnInit(): void {}
}
