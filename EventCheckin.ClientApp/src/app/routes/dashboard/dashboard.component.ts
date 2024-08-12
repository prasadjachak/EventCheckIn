import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  NgZone,
  ViewChild,
  ViewChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { SettingsService } from '@core';
import { BehaviorSubject, Subscription, finalize } from 'rxjs';

import {

} from 'app/api/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventService } from 'app/api/services';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexMarkers,
  ApexGrid,
} from 'ng-apexcharts';
import { ApexChartOptions, BarApexChartOptions, ColumnApexChartOptions, GHGLineApexChartOptions, GaugePercentApexChartOptions, LineApexChartOptions, LineColumnApexChartOptions, PieApexChartOptions, ReasonParetoChartOptions, TimeLineChartOptions, UnitApexChartOptions } from './chartOptions';
import { tr } from 'date-fns/locale';
import { TicketPassService } from 'app/api/services';
import { TicketPassModel } from 'app/api/models';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  isSubmitting = false;

  constructor(
    private _snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private ngZone: NgZone,
    private settings: SettingsService,
    private ticketPassService: TicketPassService,
    private eventService: EventService,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    this.getList();
  }

  daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getFullYear(),
                    anyDateInMonth.getMonth()+1,
                    0).getDate();
  }


  ngAfterViewInit() {
  }

  async initChart(){

  }
  source: any[] = [];
  total = 0;
  isLoading = true;

  async getList() {
    this.isLoading = true;

    this.ticketPassService
    .apiTicketPassGetPassesGet$Json$Response()
    .pipe(
      finalize(() => {
        this.isLoading = false;
      })
    )
    .subscribe(result =>{
      this.source = result.body.result;
     // this.total = result.body.result.total;
      this.isLoading = false;
      console.log(result);
    });
  }

  ngOnDestroy() {

  }

  getOtp(item) {
    this.isSubmitting = true;
    this.ticketPassService
        .apiTicketPassGetTicketOtpPost$Json$Response({body:item})
        .subscribe(result =>{
          //this.oeeEventModel = result.body.result!;
          console.log(result);
          const loginResponse = result.body.result!;
          item= result.body.result!;

          this.toast.error(result.body.message);
          console.log(loginResponse);
          this.isSubmitting = false;
          // this._snackBar.error('Updated Successfully.');
        });
  }

  getParkingOtp(item) {
    this.isSubmitting = true;
    this.ticketPassService
        .apiTicketPassGetParkingTicketOtpPost$Json$Response({body:item})
        .subscribe(result =>{
          //this.oeeEventModel = result.body.result!;
          console.log(result);
          const loginResponse = result.body.result!;
          item= result.body.result!;

          this.toast.error(result.body.message);
          console.log(loginResponse);
          this.isSubmitting = false;
          // this._snackBar.error('Updated Successfully.');
        });
  }

}
