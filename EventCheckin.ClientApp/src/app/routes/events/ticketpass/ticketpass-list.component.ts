import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// MODELS
import { ToastrService } from 'ngx-toastr';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
import { TicketPassService } from 'app/api/services';
import { TicketPassModel } from 'app/api/models';
import { TicketPassModal } from './components';
// COMP
@Component({
  selector: 'app-ticketpass-list',
  templateUrl: './ticketpass-list.component.html',
  styleUrls: ['./ticketpass-list.component.scss'],

})
export class TicketPassListComponent implements OnInit {

  columns: MtxGridColumn[] = [
    { header: 'Pass No', field: 'ticketNo'  },
    { header: 'Allowed Guest', field: 'allowedGuestCount'  },
    { header: 'Allowed Parking', field: 'allowedParkingCount'  },
    { header: 'Event Day Id', field: 'eventDayId'  },
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
    private ticketPassService: TicketPassService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    this.getList();
  }

  async createNewTicketPass() {
    var event1 : TicketPassModel= {id:0};
    try {
      const { success, ticketpassData } = await this.openTicketPassModal(event1);
      if (success) {
        this.source.push(ticketpassData);
        this.getList();
        this.toastr.info(
          `TicketPass (${ticketpassData?.name}) has been created successfully`
        );
      }
      else{
        if(ticketpassData != undefined && ticketpassData.errors.length > 0){
          this.toastr.error(ticketpassData.errors[0]);
        }
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when creating new event',
       );
    }
  }

  async update(event: TicketPassModel) {
    try {
      const { success, ticketpassData } = await this.openTicketPassModal(event);
      if (success) {
        console.log(ticketpassData);
        const eventIndex = this.source.findIndex(
          (usr) => usr?.id === event?.id
        );
        console.log(eventIndex);
        if (eventIndex >= 0) {
          this.source[eventIndex] = ticketpassData;
          this.getList();
          this.toastr.info(
             `TicketPass (${ticketpassData?.name}) has been updated successfully`
           );
        }
      }
      else{
        if(ticketpassData != undefined && ticketpassData.errors.length > 0){
          this.toastr.error(ticketpassData.errors[0]);
        }
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when updating  event'
       );
    }
  }

  async delete(ticketpassData: TicketPassModel) {
    this.ticketPassService
    .apiTicketPassDeleteTicketPassPut$Json$Response({id:ticketpassData?.id})
    .subscribe(result =>{
      //this.source = result.body.result;
      var event = result.body;

        const eventIndex = this.source.findIndex(
          (usr) => usr.id === ticketpassData?.id
        );
        if(result.body.isSuccess == true){
          this.source.splice(eventIndex, 1);
          this.getList();
          this.toastr.info(
            `TicketPass (${ticketpassData?.ticketNo}) has been removed successfully`,
          );
        }else{
          if(ticketpassData != undefined && event.isSuccess ==false){
            this.toastr.error(event.message);
          }
        }
    });

  }

  // OPEN MODAL WITH SOME CONFIGRATION
  private async openTicketPassModal(event?: TicketPassModel) {
    const eventDialog = this.dialog.open(TicketPassModal, {
      width: '450px',
      maxWidth: '100%',
      data: event,
      disableClose: true,
    });
    return await eventDialog.afterClosed().toPromise();
  }

  async getList() {
    this.isLoading = true;

    this.ticketPassService
    .apiTicketPassListTicketPasssGet$Json$Response()
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
