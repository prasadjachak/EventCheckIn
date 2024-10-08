import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


// MODELS
import { RolesService, SecurityService, SecurityUserService, UserService } from 'app/api/services';
import { RoleModel, UserModel, UserSearchModel } from 'app/api/models';
import { ToastrService } from 'ngx-toastr';
import { SecurityUserModal } from './components';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
// COMP
@Component({
  selector: 'app-securityuser-list',
  templateUrl: './securityuser-list.component.html',
  styleUrls: ['./securityuser-list.component.scss'],

})
export class SecurityUserListComponent implements OnInit {
  userRoles : RoleModel[] = [];

  columns: MtxGridColumn[] = [
    { header: 'Mobile', field: 'phoneNumber'  },
    { header: 'Name', field: 'name' },
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
  newMemberButton = "Create";
  selectedRoleName = "GATESECURITY";

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
    private userService: SecurityUserService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private roleService: RolesService
  ) {}

  async ngOnInit() {
    this.newMemberButton = "Add " + this.selectedRoleName;
    this.getList();
    this.getRoleList();
  }

  async createNewUser() {
    var user1 = {userRoles : this.userRoles};
    try {
      const { success, userData ,message} = await this.openUserModal(user1);
      console.log(userData);
      console.log(success);
      if (success) {
        this.source.push(userData);
        this.getList();
        this.toastr.info(
          `User (${userData?.fullName}) has been created successfully`
        );
      }
      else{
        this.toastr.error(message);
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when creating new user',
       );
    }
  }

  async update(user: UserModel) {
    try {
      const { success, userData ,message } = await this.openUserModal(user);
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
        this.toastr.error(message);
      }
    } catch (error: any) {
      this.toastr.error(
         error?.message || 'An error occoured when updating  user'
       );
    }
  }

  async delete(userData: UserModel) {
    this.userService
    .apiSecurityUserDeleteUserDelete$Json$Response({id:userData?.id})
    .subscribe(result =>{
      var user = result.body;

        const userIndex = this.source.findIndex(
          (usr) => usr.id === userData?.id
        );
        if(result.body.isSuccess == true){
          if (userIndex >= 0 ) {
            this.source.splice(userIndex, 1);
            this.getList();
            this.toastr.info(
              `User (${userData?.userName}) has been removed successfully`,
            );
          }
        }else{
          if(userData !=undefined && user.isSuccess ==false){
            this.toastr.error(user.message);
          }
        }
    });

  }

  // OPEN MODAL WITH SOME CONFIGRATION
  private async openUserModal(user?: UserModel) {
    user.userRoles = this.userRoles;
    user.roleName = this.selectedRoleName;
    const userDialog = this.dialog.open(SecurityUserModal, {
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
    {pageSize:this.query.per_page , pageNumber:this.query.start,searchRolename:this.selectedRoleName};
    this.userService
    .apiSecurityUserListUserPost$Json$Response({body:userSearchModel})
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe(result =>{
      console.log(result);
      this.source = result.body.result;
     // this.total = result.body.result.total;
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
      console.log(result.body.result);
      this.userRoles = result.body.result.filter(element => {
        return element.name == "GATESECURITY" ||  element.name == "PARKSECURITY";
      })

      ;
      this.isLoading = false;
    });
  }

  async filterSecurityList(role) {
    console.log(role);
    this.selectedRoleName = role;
    this.newMemberButton = "Add " + this.selectedRoleName;
    this.getList();
  }

}
