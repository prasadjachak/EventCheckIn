import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RolesService } from 'app/api/services';
import { RoleModel } from 'app/api/models';
import { ToastrService } from 'ngx-toastr';
import { RoleModal } from './components';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ControlsOf, IProfile, PageHeaderComponent } from '@shared';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// COMP
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    TranslateModule,
    PageHeaderComponent,
  ],
})
export class RoleListComponent implements OnInit {

  columns: MtxGridColumn[] = [
    { header: 'Rolename', field: 'name'  },

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
    q: 'role:nzbin',
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
    private roleService: RolesService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  async ngOnInit() {
    this.getList();
  }

  async createNewRole() {
    var role1 = {};
    try {
      const { success, roleData } = await this.openRoleModal(role1);
      if (success) {
        this.source.push(roleData);
        this.getList();
        this.toastr.info(
          `Role (${roleData?.name}) has been created successfully`
        );
      }
      else{
        if(roleData != undefined && roleData.errors.length > 0){
          this.toastr.error(roleData.errors[0]);
        }
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when creating new role',
       );
    }
  }

  async update(role: RoleModel) {
    try {
      const { success, roleData } = await this.openRoleModal(role);
      if (success) {
        const roleIndex = this.source.findIndex(
          (usr) => usr?.id === role?.id
        );
        if (roleIndex >= 0) {
          this.source[roleIndex] = roleData;
          this.getList();
          this.toastr.info(
             `Role (${roleData?.name}) has been updated successfully`
           );
        }
      }
      else{
        if(roleData != undefined && roleData.errors.length > 0){
          this.toastr.error(roleData.errors[0]);
        }
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when updating  role'
       );
    }
  }

  async delete(roleData: RoleModel) {
    this.roleService
    .apiRolesDeleteRoleIdDelete$Json$Response({id:roleData?.id??0})
    .subscribe(result =>{
      this.source = result.body.result.items;
      var role = result.body.result
        const roleIndex = this.source.findIndex(
          (usr) => usr.id === roleData?.id
        );
        if(role.errors.length == 0){
          this.source.splice(roleIndex, 1);
          this.getList();
          this.toastr.info(
            `Role (${roleData?.name}) has been removed successfully`,
          );
        }else{
          if(roleData != undefined && role.errors.length > 0){
            this.toastr.error(role.errors[0]);
          }
        }
    });

  }

  // OPEN MODAL WITH SOME CONFIGRATION
  private async openRoleModal(role?: RoleModel) {
    const roleDialog = this.dialog.open(RoleModal, {
      width: '450px',
      maxWidth: '100%',
      data: role,
      disableClose: true,
    });
    return await roleDialog.afterClosed().toPromise();
  }

  async getList() {
    this.isLoading = true;
    this.roleService
    .apiRolesListRoleGet$Json$Response()
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe(result =>{
      //this.source = result.body.result.items;
      //this.total = result.body.result.total;
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
