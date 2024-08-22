import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'app/api/models';

// MODELS

import { UserService } from 'app/api/services/user.service';
@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel
  ) {}

  async save(formData: any) {
    console.log(formData);
    this.data.name = formData?.name;
    this.data.phoneNumber = formData?.phoneNumber;
    this.data.email = formData?.email;
    this.data.roleIds = formData?.roleIds;

     this.data.id > 0
      ? await this.userService.apiUserUpdateUserPut$Json$Response({
         body:this.data
        }).subscribe(result =>{
          var user = result.body.result
          this.dialogRef.close({ success: result.body.isSuccess, userData: user, message : result.body.message});
        })
      : await this.userService.apiUserAddUserPost$Json$Response({body:this.data}).subscribe(result =>{
        var user = result.body.result
        this.dialogRef.close({ success: result.body.isSuccess, userData: user,message : result.body.message });
      });
  }


  ngOnInit(): void {}
}
