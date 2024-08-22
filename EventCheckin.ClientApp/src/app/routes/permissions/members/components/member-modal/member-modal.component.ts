import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from 'app/api/models';
import { MemberService } from 'app/api/services';

// MODELS

import { UserService } from 'app/api/services/user.service';
@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.scss'],
})
export class MemberModalComponent implements OnInit {
  constructor(
    private userService: MemberService,
    private dialogRef: MatDialogRef<MemberModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel
  ) {}

  async save(formData: any) {
    console.log(formData);
    this.data.name = formData?.name;
    this.data.phoneNumber = formData?.phoneNumber;
    this.data.memberNo = formData?.memberNo;
    this.data.email = formData?.email;
    this.data.roleIds = formData?.roleIds;
     this.data.id > 0
      ? await this.userService.apiMemberUpdateUserPut$Json$Response({
         body:this.data
        }).subscribe(result =>{
          var user = result.body.result
          this.dialogRef.close({ success: result.body.isSuccess, userData: user,message : result.body.message });
        })
      : await this.userService.apiMemberAddMemberUserPost$Json$Response({body:this.data}).subscribe(result =>{
        var user = result.body.result
        this.dialogRef.close({ success: result.body.isSuccess, userData: user,message : result.body.message });
      });
  }


  ngOnInit(): void {}
}
