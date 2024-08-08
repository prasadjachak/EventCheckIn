import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// MODELS


import { RolesService } from 'app/api/services';
import { RoleModel } from 'app/api/models';
import { ToastrService } from 'ngx-toastr';
import { RoleModal } from './components';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
// COMP
@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],

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
        console.log(roleData);
        const roleIndex = this.source.findIndex(
          (usr) => usr?.id === role?.id
        );
        console.log(roleIndex);
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
    .apiRolesDeleteRoleDelete$Json$Response({id:roleData?.id})
    .subscribe(result =>{
      //this.source = result.body.result;
      var role = result.body;

        const roleIndex = this.source.findIndex(
          (usr) => usr.id === roleData?.id
        );
        if(result.body.isSuccess == true){
          this.source.splice(roleIndex, 1);
          this.getList();
          this.toastr.info(
            `Role (${roleData?.name}) has been removed successfully`,
          );
        }else{
          if(roleData != undefined && role.isSuccess ==false){
            this.toastr.error(role.message);
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
