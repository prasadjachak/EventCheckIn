import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { LocalStorageService } from '@shared';
import { FormValidationService } from '@shared/services/form/form-validation.service';
import { EventMemberModel, EventModel, UserModel, UserSearchModel } from 'app/api/models';
import { MemberService, EventService } from 'app/api/services';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';

// SERVICES


@Component({
  selector: 'member-event',
  templateUrl: './member-event.component.html',
  styleUrls: ['./member-event.component.scss'],
})
export class MemberEventComponent implements OnInit {
  columns: MtxGridColumn[] = [

    { header: 'Name', field: 'user.name'  },
    { header: 'Mobile', field: 'user.phoneNumber'  },
    { header: 'GuestNo', field: 'guestNo'  },
    { header: 'ParkNo', field: 'parkNo'  },
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
          text: 'delete',
          icon: 'delete',
          tooltip: 'Delete',
          color: 'warn',
          pop: 'Confirm delete?',
          click: (data: any) => this.delete(data),
        }
    ]},
  ];

  source: any[] = [];
  employees: UserModel[] = [];
  total = 0;
  isLoading = true;

  query = {
    q: '',
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

  @Input() memberEventData!: EventMemberModel;

  // USER FORM GROUP
  memberEventForm!: FormGroup;
  constructor(
    private formValidationService: FormValidationService,
    public eventService: EventService,
    public memberService: MemberService,
    private store: LocalStorageService,
    private toastr: ToastrService,
  ) {
    // INIT USER FORM
  }

  roleName = this.store.get('rolename');

  ngOnInit(): void {
    this.memberEventForm = this.initmemberEventForm;
    this.getList();
    this.getEmployeeList()
  }
  // GET USER FORM DATA
  get getFormData() {
    return { ...this.memberEventForm.value };
  }

  private  getMemberEventFormData() {
    return { ...this.memberEventForm.value };
  }
  // USER FORM PROPERTIES
  private get initmemberEventForm() {

    return new FormGroup(
      {
        eventId: new FormControl(this.memberEventData.id ||'', [
          Validators.required,
          Validators.maxLength(60),
        ]),
        userId: new FormControl('', [
          Validators.required,
          Validators.maxLength(60),
        ]),
        guestNo: new FormControl('', [
          Validators.required,
          Validators.maxLength(60),
        ]),
        parkNo: new FormControl('', [
          Validators.required,
          Validators.maxLength(60),
        ]),
      }
      // TODO CAN ACTIVATE FOR BETTER PERFORMANCE
      // { updateOn: 'blur' }
    );
  }

  // FIELD ERROR
  fieldHasError(fieldName: string): boolean {
    return this.formValidationService.fieldHasError(fieldName, this.memberEventForm);
  }
  // FIELD ERROR MESSAGE
  getErrorMessage(fieldName: string): string {
    return this.formValidationService.getErrorMessage(fieldName, this.memberEventForm);
  }


  async getList() {
    this.isLoading = true;

    {length:100};

    this.eventService
      .apiEventGeteventmemberlistPost$Json$Response({eventEntityId:this.memberEventData.id})
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(res => {
        this.source = res.body.result;
        console.log(this.source);
        this.isLoading = false;
      });
  }

  async delete(employeeData: any) {
    console.log(employeeData);
    this.eventService
    .apiEventDeleteeventmemberPost$Json$Response({eventMemberId:employeeData.id})
    .subscribe(result =>{
      var employee = result.body.result

        const employeeIndex = this.source.findIndex(
          (usr) => usr.id === employeeData?.id
        );


          if (employeeIndex >= 0 ) {
            this.source.splice(employeeIndex, 1);
            this.getList();
            this.toastr.info(
              `(${employeeData?.name}) has been successfully removed from team`,
            );
          }

    });
  }

  async search() {
    this.query.page = 0;
    this.query.start = 1;
    this.getList();
  }

  async reset() {
    this.query.page = 0;
    this.query.start = 1;
    this.query.per_page = 100;
    this.getList();
  }

  userSearchModel : UserSearchModel = {};

  async getEmployeeList() {
    this.isLoading = true;
    console.log(this.roleName);
    if(this.roleName =="SUPERADMIN" || this.roleName =="ADMIN")
    {
      this.userSearchModel.searchUsername = "MEMBERSADMIN";
    }
    else
    {
      this.userSearchModel.searchUsername = "MEMBERS";
    }
    this.memberService
      .apiMemberListUserPost$Json$Response({body:this.userSearchModel})
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(res => {
        this.employees = res.body.result;
        console.log(this.employees);

        this.isLoading = false;
      });
  }

  async save() {
    var formData = this.getMemberEventFormData();
    console.log(this.memberEventData);
    console.log(formData);
    this.memberEventData.eventId = formData?.eventId;
    this.memberEventData.userId = formData?.userId;
    this.memberEventData.guestNo = formData?.guestNo;
    this.memberEventData.parkNo = formData?.parkNo;

    await this.eventService.apiEventCreateeventmemberPost$Json$Response({
        body:formData
      }).subscribe(result =>{
        console.log(result.body);
        var ticketpass = result.body.result;
        this.getList();
      });
  }
}
