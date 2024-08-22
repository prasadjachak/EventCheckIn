import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'app/api/models';
import { SecurityUserService } from 'app/api/services';

// MODELS

import { UserService } from 'app/api/services/user.service';
@Component({
  selector: 'app-securityuser-modal',
  templateUrl: './securityuser-modal.component.html',
  styleUrls: ['./securityuser-modal.component.scss'],
})
export class SecurityUserModalComponent implements OnInit {
  constructor(
    private userService: SecurityUserService,
    private dialogRef: MatDialogRef<SecurityUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel
  ) {}

  async save(formData: any) {
    console.log(formData);
    this.data.name = formData?.name;
    this.data.phoneNumber = formData?.phoneNumber;
    this.data.email = formData?.email;
    this.data.roleIds = formData?.roleIds;

     this.data.id > 0
      ? await this.userService.apiSecurityUserUpdateUserPut$Json$Response({
         body:this.data
        }).subscribe(result =>{
          var user = result.body.result
          this.dialogRef.close({ success: result.body.isSuccess, userData: user,message : result.body.message });
        })
      : await this.userService.apiSecurityUserAddSecurityUserPost$Json$Response({body:this.data}).subscribe(result =>{
        var user = result.body.result
        this.dialogRef.close({ success: result.body.isSuccess, userData: user,message : result.body.message });
      });
  }


  ngOnInit(): void {}
}
