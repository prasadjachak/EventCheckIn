import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { UserListComponent } from './users/user-list.component';
import { UserFormComponent } from './users/components/user-form/user-form.component';
import { UserModalComponent } from './users/components/user-modal/user-modal.component';
import { RoleListComponent } from './roles/role-list.component';
import { RoleFromComponent } from './roles/components/role-from/role-from.component';
import { RoleModalComponent } from './roles/components/role-modal/role-modal.component';
import { RolesPermissionsComponent } from './role-permissions/roles-permissions.component';
import { SecurityUserListComponent } from './securityusers/securityuser-list.component';
import { SecurityUserFormComponent } from './securityusers/components/securityuser-form/securityuser-form.component';
import { SecurityUserModalComponent } from './securityusers/components/securityuser-modal/securityuser-modal.component';
import { MemberListComponent } from './members/member-list.component';
import { MemberFormComponent } from './members/components/member-form/member-form.component';
import { MemberModalComponent } from './members/components/member-modal/member-modal.component';
import { GuestFormComponent } from './guests/components/guest-form/guest-form.component';
import { GuestModalComponent } from './guests/components/guest-modal/guest-modal.component';
import { GuestListComponent } from './guests/guest-list.component';

const COMPONENTS: any[] = [
  UserListComponent,
  UserFormComponent,
  UserModalComponent,
  RoleListComponent,
  RoleFromComponent,
  RoleModalComponent,
  RolesPermissionsComponent,
  SecurityUserListComponent,
  SecurityUserFormComponent,
  SecurityUserModalComponent,
  MemberListComponent,
  MemberFormComponent,
  MemberModalComponent,
  GuestListComponent,
  GuestFormComponent,
  GuestModalComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, PermissionsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class PermissionsModule {}
