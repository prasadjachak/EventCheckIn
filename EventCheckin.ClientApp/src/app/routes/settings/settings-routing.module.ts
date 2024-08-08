import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ExportComponent } from './export/export.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
