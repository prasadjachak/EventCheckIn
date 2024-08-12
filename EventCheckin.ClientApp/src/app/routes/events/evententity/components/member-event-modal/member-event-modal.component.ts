import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventMemberModel, EventModel } from 'app/api/models';
import { EventService } from 'app/api/services';

// MODELS

@Component({
  selector: 'app-member-event-modal',
  templateUrl: './member-event-modal.component.html',
  styleUrls: ['./member-event-modal.component.scss'],
})
export class MemberEventModalComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private dialogRef: MatDialogRef<MemberEventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  async save(formData: any) {
    console.log(formData);
    this.data.eventId = formData?.eventId;
    this.data.userId = formData?.userId;

    await this.eventService.apiEventCreateeventmemberPost$Json$Response({
      body:this.data
    }).subscribe(result =>{
      var team = result.body.result
      //this.dialogRef.close({ success: true, teamData: team });
    });

  }
  ngOnInit(): void {}
}
