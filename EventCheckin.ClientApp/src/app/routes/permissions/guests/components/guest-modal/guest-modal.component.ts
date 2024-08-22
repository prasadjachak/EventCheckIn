import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'app/api/models';
import { GuestService } from 'app/api/services';

// MODELS

import { UserService } from 'app/api/services/user.service';
@Component({
  selector: 'app-guest-modal',
  templateUrl: './guest-modal.component.html',
  styleUrls: ['./guest-modal.component.scss'],
})
export class GuestModalComponent implements OnInit {
  constructor(
    private userService: GuestService,
    private dialogRef: MatDialogRef<GuestModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel
  ) {}

  async save(formData: any) {
    console.log(formData);
    this.data.name = formData?.name;
    this.data.phoneNumber = formData?.phoneNumber;
    this.data.email = formData?.email;
    this.data.roleIds = formData?.roleIds;

     this.data.id > 0
      ? await this.userService.apiGuestUpdateUserPut$Json$Response({
         body:this.data
        }).subscribe(result =>{
          var user = result.body.result
          this.dialogRef.close({ success: result.body.isSuccess, userData: user,message : result.body.message});
        })
      : await this.userService.apiGuestAddGuestUserPost$Json$Response({body:this.data}).subscribe(result =>{
        var user = result.body.result
        console.log(result.body);
        this.dialogRef.close({ success: result.body.isSuccess, userData: user,message : result.body.message });
      });
  }


  ngOnInit(): void {}
}
