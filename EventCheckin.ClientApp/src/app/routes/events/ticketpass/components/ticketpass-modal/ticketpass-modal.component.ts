import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketPassModel } from 'app/api/models';
import { TicketPassService } from 'app/api/services';

// MODELS

@Component({
  selector: 'app-ticketpass-modal',
  templateUrl: './ticketpass-modal.component.html',
  styleUrls: ['./ticketpass-modal.component.scss'],
})
export class TicketPassModalComponent implements OnInit {
  constructor(
    private ticketpassService: TicketPassService,
    private dialogRef: MatDialogRef<TicketPassModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TicketPassModel
  ) {}

  async save(formData: any) {
    console.log(this.data);
    this.data.ticketNo = formData?.ticketNo;
    this.data.allowedGuest = formData?.allowedGuest;
    this.data.allowedParkingCount = formData?.allowedParkingCount;
    this.data.eventDayId = formData?.eventDayId;
    this.data.userId = formData?.userId;
     this.data.id > 0
      ? await this.ticketpassService.apiTicketPassUpdateTicketPassPut$Json$Response({
          body:this.data
        }).subscribe(result =>{
          console.log(result.body);
          var ticketpass = result.body.result
          this.dialogRef.close({ success: result.body.isSuccess, ticketpassData: ticketpass });
        })
      : await this.ticketpassService.apiTicketPassAddTicketPassPost$Json$Response({
        body:this.data
      }).subscribe(result =>{
        var ticketpass = result.body.result
        console.log(result.body);
        this.dialogRef.close({ success:  result.body.isSuccess, eventData: event });
      });
  }

  ngOnInit(): void {}
}
