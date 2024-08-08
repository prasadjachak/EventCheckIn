import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// MODELS
import { ToastrService } from 'ngx-toastr';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
import { EventDayService } from 'app/api/services';
import { EventDayModel } from 'app/api/models';
import { EventDayModal } from './components';
// COMP
@Component({
  selector: 'app-eventday-list',
  templateUrl: './eventday-list.component.html',
  styleUrls: ['./eventday-list.component.scss'],

})
export class EventDayListComponent implements OnInit {

  columns: MtxGridColumn[] = [
    { header: 'Event Day Name', field: 'eventDayName'  },
    { header: 'Start Date', field: 'startDate'  },
    { header: 'End Date', field: 'endDate'  },
    { header: 'EventId', field: 'eventId'  },
    {
      header: 'Operation',
      field: 'operation',
      width: '180px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: (data: any) => this.update(data),
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Delete',
          color: 'warn',
          pop: 'Confirm delete?',
          click: (data: any) => this.delete(data),
        },
      ],
    },
  ];

  source: any[] = [];
  total = 0;
  isLoading = true;

  query = {
    q: 'event:nzbin',
    sort: 'stars',
    order: 'desc',
    page: 0,
    per_page: 10,
    start: 1,
  };

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 1;
    return p;
  }

  constructor(
    private eventDayService: EventDayService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    this.getList();
  }

  async createNewEventDay() {
    var event1 : EventDayModel= {id:0};
    try {
      const { success, eventdayData } = await this.openEventDayModal(event1);
      if (success) {
        this.source.push(eventdayData);
        this.getList();
        this.toastr.info(
          `EventDay (${eventdayData?.name}) has been created successfully`
        );
      }
      else{
        if(eventdayData != undefined && eventdayData.errors.length > 0){
          this.toastr.error(eventdayData.errors[0]);
        }
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when creating new event',
       );
    }
  }

  async update(event: EventDayModel) {
    try {
      const { success, eventdayData } = await this.openEventDayModal(event);
      if (success) {
        console.log(eventdayData);
        const eventIndex = this.source.findIndex(
          (usr) => usr?.id === event?.id
        );
        console.log(eventIndex);
        if (eventIndex >= 0) {
          this.source[eventIndex] = eventdayData;
          this.getList();
          this.toastr.info(
             `EventDay (${eventdayData?.name}) has been updated successfully`
           );
        }
      }
      else{
        if(eventdayData != undefined && eventdayData.errors.length > 0){
          this.toastr.error(eventdayData.errors[0]);
        }
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when updating  event'
       );
    }
  }

  async delete(eventdayData: EventDayModel) {
    this.eventDayService
    .apiEventDayDeleteEventEntityPut$Json$Response({id:eventdayData?.id})
    .subscribe(result =>{
      //this.source = result.body.result;
      var event = result.body;

        const eventIndex = this.source.findIndex(
          (usr) => usr.id === eventdayData?.id
        );
        if(result.body.isSuccess == true){
          this.source.splice(eventIndex, 1);
          this.getList();
          this.toastr.info(
            `EventDay (${eventdayData?.eventDayName}) has been removed successfully`,
          );
        }else{
          if(eventdayData != undefined && event.isSuccess ==false){
            this.toastr.error(event.message);
          }
        }
    });

  }

  // OPEN MODAL WITH SOME CONFIGRATION
  private async openEventDayModal(event?: EventDayModel) {
    const eventDialog = this.dialog.open(EventDayModal, {
      width: '450px',
      maxWidth: '100%',
      data: event,
      disableClose: true,
    });
    return await eventDialog.afterClosed().toPromise();
  }

  async getList() {
    this.isLoading = true;

    this.eventDayService
    .apiEventDayListEventDayGet$Json$Response()
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe(result =>{
      this.source = result.body.result;
     // this.total = result.body.result.total;
      this.isLoading = false;
      console.log(result);
    });
  }

  async getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.query.start = (e.pageIndex * e.pageSize) + 1;
    this.getList();
  }

  async search() {
    this.query.page = 0;
    this.query.start = 1;
    this.getList();
  }

  async reset() {
    this.query.page = 0;
    this.query.per_page = 10;
    this.query.start = 1;
    this.getList();
  }
}
