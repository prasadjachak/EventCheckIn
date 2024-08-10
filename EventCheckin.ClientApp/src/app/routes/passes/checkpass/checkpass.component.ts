import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// MODELS
import { EventService, UserService } from 'app/api/services';
import { EventModel, UserModel, UserSearchModel } from 'app/api/models';
import { ToastrService } from 'ngx-toastr';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
// COMP
// COMP
@Component({
  selector: 'app-checkpass',
  templateUrl: './checkpass.component.html',
  styleUrls: ['./checkpass.component.scss'],

})
export class CheckPassComponent implements OnInit {

  columns: MtxGridColumn[] = [
    { header: 'Eventname', field: 'name'  },
    { header: 'Start Date', field: 'startDate'  },
    { header: 'End Date', field: 'endDate'  },
    { header: 'Address', field: 'venueAddress1'  },
    { header: 'Active', field: 'isLive'  },
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
  users: UserModel[] = [];
  selectedEvents : EventModel[] =  [];
  selectedUsers : UserModel[] =  [];
  total = 0;
  isLoading = true;
  userSearch = '';
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
    private eventService: EventService,
    private userService: UserService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    this.getList();
    this.getUserList();
  }

  async createNewEvent() {
    var event1 : EventModel= {id:0};
    try {


    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when creating new event',
       );
    }
  }

  async update(event: EventModel) {
    try {

    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when updating  event'
       );
    }
  }

  async delete(eventData: EventModel) {
    this.eventService
    .apiEventDeleteEventEntityPut$Json$Response({id:eventData?.id})
    .subscribe(result =>{
      //this.source = result.body.result;
      var event = result.body;

        const eventIndex = this.source.findIndex(
          (usr) => usr.id === eventData?.id
        );
        if(result.body.isSuccess == true){
          this.source.splice(eventIndex, 1);
          this.getList();
          this.toastr.info(
            `Event (${eventData?.name}) has been removed successfully`,
          );
        }else{
          if(eventData != undefined && event.isSuccess ==false){
            this.toastr.error(event.message);
          }
        }
    });

  }

  async getList() {
    this.isLoading = true;

    this.eventService
    .apiEventListEventEntitysGet$Json$Response()
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

  async getUserList() {
    this.isLoading = true;
    const userSearchModel : UserSearchModel =
    {pageSize:this.query.per_page , pageNumber:this.query.start};
    this.userService
    .apiUserListUserPost$Json$Response({body:userSearchModel})
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe(result =>{
      console.log(result);
      this.users = result.body.result;
     // this.total = result.body.result.total;
      this.isLoading = false;
    });
  }
}
