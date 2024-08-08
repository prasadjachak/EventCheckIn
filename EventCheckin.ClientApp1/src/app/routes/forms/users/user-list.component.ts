import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// MODELS
import {  RolesService, UserService } from 'app/api/services';
import { RoleModel,  UserModel, UserSearchModel } from 'app/api/models';
import { ToastrService } from 'ngx-toastr';
import { UserModal } from './components';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
// COMP
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],

})
export class UserListComponent implements OnInit {
  userRoles : RoleModel[] = [];

  columns: MtxGridColumn[] = [
    { header: 'Fullname', field: 'fullName' },
    { header: 'Username', field: 'username'  },
    { header: 'Role', field: 'roleName'  },
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

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private roleService: RolesService
  ) {}

  async ngOnInit() {
    this.getList();
    this.getRoleList();
  }

  async createNewUser() {
    var user1 = {roles : this.userRoles};
    try {
      const { success, userData } = await this.openUserModal(user1);
      if (success) {
        this.source.push(userData);
        this.getList();
        this.toastr.info(
          `User (${userData?.fullName}) has been created successfully`
        );
      }
      else{
        console.log(userData);
        if(userData !=undefined && userData.errors.length > 0){
          this.toastr.error(userData.errors[0]);
        }
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when creating new user',
       );
    }
  }

  async update(user: UserModel) {
    try {
      const { success, userData } = await this.openUserModal(user);
      if (success) {
        const userIndex = this.source.findIndex(
          (usr) => usr?.id === user?.id
        );
        console.log(userIndex);
        if (userIndex >= 0) {
          this.source[userIndex] = userData;
          this.getList();
          this.toastr.info(
             `User (${userData?.fullName}) has been updated successfully`
           );
        }
      }
      else{
        if(userData !=undefined && userData.errors.length > 0){
          this.toastr.error(userData.errors[0]);
        }
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when updating  user'
       );
    }
  }

  async delete(userData: UserModel) {
    this.userService
    .apiUserDeleteUserIdDelete$Json$Response({id:userData?.id})
    .subscribe(result =>{
      var user = result.body.result

        const userIndex = this.source.findIndex(
          (usr) => usr.id === userData?.id
        );
        if(user.errors ===undefined || user.errors.length == 0){
          if (userIndex >= 0 ) {
            this.source.splice(userIndex, 1);
            this.getList();
            this.toastr.info(
              `User (${userData?.userName}) has been removed successfully`,
            );
          }
        }else{
          if(userData !=undefined && user.errors.length > 0){
            this.toastr.error(user.errors[0]);
          }
        }
    });

  }

  // OPEN MODAL WITH SOME CONFIGRATION
  private async openUserModal(user: UserModel) {
    user.roles = this.userRoles;
    const userDialog = this.dialog.open(UserModal, {
      width: '450px',
      maxWidth: '100%',
      data: user,
      disableClose: true,
    });
    return await userDialog.afterClosed().toPromise();
  }

  async getList() {
    this.isLoading = true;
    const userSearchModel : UserSearchModel =
    {pageSize:this.query.per_page , pageNumber:this.query.start};
    this.userService
    .apiUserListUserGet$Json$Response({body:userSearchModel})
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe(result =>{
      //this.source = result.body.result.items;
      //this.total = result.body.result.total;
      this.isLoading = false;
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

  async getRoleList() {
    this.isLoading = true;

    this.roleService
    .apiRolesListRoleGet$Json$Response()
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe(result =>{
      //this.userRoles = result.body.result;
      this.isLoading = false;
    });
  }
}
