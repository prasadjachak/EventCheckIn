import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { UserListComponent } from './users/user-list.component';
import { UserFormComponent } from './users/components/user-form/user-form.component';
import { UserModalComponent } from './users/components/user-modal/user-modal.component';
import { RoleListComponent } from './roles/role-list.component';
import { RoleFromComponent } from './roles/components/role-from/role-from.component';
import { RoleModalComponent } from './roles/components/role-modal/role-modal.component';

const COMPONENTS: any[] = [
  UserListComponent,
  UserFormComponent,
  UserModalComponent,
  RoleListComponent,
  RoleFromComponent,
  RoleModalComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, PermissionsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class PermissionsModule {}
