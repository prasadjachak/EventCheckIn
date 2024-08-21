import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// MODELS
import { ToastrService } from 'ngx-toastr';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
import { EventService, TicketPassService } from 'app/api/services';
import { TicketPassModel, TicketPassSearchModel } from 'app/api/models';
import { TicketPassModal } from './components';
// COMP
@Component({
  selector: 'app-ticketpass-list',
  templateUrl: './ticketpass-list.component.html',
  styleUrls: ['./ticketpass-list.component.scss'],

})
export class TicketPassListComponent implements OnInit {

  columns: MtxGridColumn[] = [
     { header: 'Event', field: 'eventName'  },
     { header: 'User', field: 'guestName'  },
     { header: 'Mobile', field: 'guestPhoneNumber'  },
     { header: 'Date', field: 'startDate'  },
    { header: 'Pass No', field: 'ticketNo'  },
    { header: 'Allowed Guest', field: 'allowedGuestCount'  },
    { header: 'Allowed Parking', field: 'allowedParkingCount'  },
    { header: 'Entry Status', field: 'entryStatusName'  },
    { header: 'Park Status', field: 'parkStatusName'  },
    { header: 'AssignedBy', field: 'assignedByName'  },
  ];

  source: any[] = [];
  searchModel: TicketPassSearchModel = {};
  total = 0;
  isLoading = true;
  events: any[] = [];
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
    private eventService: EventService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    this.getEventList();
    this.getList();
  }

  async searchTicketPass() {
   this.getList();
  }



  async getList() {
    this.isLoading = true;

    this.ticketPassService
    .apiTicketPassSearchTicketPassesPost$Json$Response({body:this.searchModel})
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


  async getEventList() {
    this.isLoading = true;

    this.eventService
    .apiEventListEventEntitysGet$Json$Response()
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe(result =>{
      this.events = result.body.result;
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
