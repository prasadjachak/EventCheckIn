import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoleModel } from 'app/api/models';
import { RolesService } from 'app/api/services';

// MODELS

@Component({
  selector: 'app-role-modal',
  templateUrl: './role-modal.component.html',
  styleUrls: ['./role-modal.component.scss'],
})
export class RoleModalComponent implements OnInit {
  constructor(
    private roleService: RolesService,
    private dialogRef: MatDialogRef<RoleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data : RoleModel
  ) {}

  async save(formData: any) {
    console.log(this.data);
    this.data.name = formData?.name;
     this.data.id > 0
      ? await this.roleService.apiRolesUpdateRoleIdPut$Json$Response({
          body:this.data
        }).subscribe(result =>{
          var role = result.body.result
          this.dialogRef.close({ success: role.errors.length == 0 ? true:false, roleData: role });
        })
      : await this.roleService.apiRolesAddRolePost$Json$Response({
        body:this.data
      }).subscribe(result =>{
        var role = result.body.result
        this.dialogRef.close({ success:  role.errors.length == 0 ? true:false, roleData: role });
      });
  }

  ngOnInit(): void {}
}
