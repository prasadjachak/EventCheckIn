import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploaderInputComponent } from './file-uploader-input.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'app/material.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
    MaterialModule,
		FileUploadModule
	],
	exports: [FileUploaderInputComponent],
	declarations: [FileUploaderInputComponent]
})
export class FileUploaderModule {}
