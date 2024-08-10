import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list.component';
import { RoleListComponent } from './roles/role-list.component';
import { RolesPermissionsComponent } from './role-permissions/roles-permissions.component';
import { SecurityUserListComponent } from './securityusers/securityuser-list.component';
import { MemberListComponent } from './members/member-list.component';
import { GuestListComponent } from './guests/guest-list.component';

const routes: Routes = [
  {
    path: 'adminusers',
    component: UserListComponent,
  },
  {
    path: 'roles',
    component: RoleListComponent,
  },
  {
    path: 'role-permissions',
    component: RolesPermissionsComponent,
  },
  {
    path: 'securityusers',
    component: SecurityUserListComponent,
  },
  {
    path: 'memberusers',
    component: MemberListComponent,
  },
  {
    path: 'guestusers',
    component: GuestListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermissionsRoutingModule {}
