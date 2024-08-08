import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from '@shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileUploaderModule } from '@shared/components/file-uploader-input/file-uploader-input.module';

const COMPONENTS: any[] = [

];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    FileUploadModule,
    FileUploaderModule,
    MatFormFieldModule,
    MatInputModule,
    SettingsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class SettingsModule {}
