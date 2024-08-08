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
import {

} from 'app/api/services';
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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {


  selectedUnitId: number = 0;
  selectedProductionLineId: number = 0;
  selectedEquipmentId: number = 0;
  selectedshiftId : number = 0;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  notifySubscription!: Subscription;
  fromDate = new Date();
  toDate = new Date();
  perTime: string;

  chartWasteConsumption: any;
  portfoliosChartData: any;

  xAxisLine: string[] = [''];
  lineSeries: any[] = [];
  xAxisMaterial: string[] = [''];
  materialSeries: any[] = [];
  chart1: any;
  chart2: any;
  isLoading = true;
  colors: [
    "#00FF00",
    "#0000FF"
  ];

  gaugeType = "arch";
  gaugeAppendText = "%";

  oeeGaugeValue = 0;
  oeeGaugeLabel = "Garba Pass";
  oeeGaugeSize= "200";
  oeeForegroundColor= "#fb8c00";

  avaGaugeValue = 0;
  avaGaugeLabel = "A";
  avaGaugeSize= "100";
  avaForegroundColor= "#2a9d8f";

  perGaugeValue = 0;
  perGaugeLabel = "P";
  perGaugeSize= "100";
  perForegroundColor= "#89CFF0";

  quaGaugeValue = 0;
  quaGaugeLabel = "Q";
  quaGaugeSize= "100";
  quaForegroundColor= "#dd3420";
  unitNameAvaibility = 'MINUTE';


  @ViewChildren(BaseChartDirective) oeeCharts: QueryList<BaseChartDirective>;
  @ViewChild('shiftChart', { static: false }) shiftChart: ChartComponent;
  public shiftChartOptions: Partial<ApexChartOptions>;

  @ViewChild('unitChart') unitChart: ChartComponent;
  public unitChartOptions: Partial<UnitApexChartOptions>;

  @ViewChild('lineChart') lineChart: ChartComponent;
  public lineChartOptions: Partial<LineApexChartOptions>;

  @ViewChild("waterConsumptionChart") waterConsumptionChart: ChartComponent;
  public waterConsumptionChartOptions: Partial<BarApexChartOptions>;

  @ViewChild('capacityChart') capacityChart: ChartComponent;
  public capacityColumnChartOptions: Partial<ColumnApexChartOptions>;

  @ViewChild('oeeTrendChart') oeeTrendChart: ChartComponent;
  public oeeTrendColumnChartOptions: Partial<ColumnApexChartOptions>;

  @ViewChild('wasteLineChart') wasteLineChart: ChartComponent;
  public wasteLineChartOptions: Partial<LineApexChartOptions>;

  @ViewChild('ghgLineChart') ghgLineChart: ChartComponent;
  public ghgLineChartOptions: Partial<GHGLineApexChartOptions>;

  @ViewChild('materialChart') materialChart: ChartComponent;
  public materialChartOptions: Partial<BarApexChartOptions>;

  @ViewChild('energyConsBarChart') energyConsBarChart: ChartComponent;
  public energyConsumptionBarChartOptions: Partial<BarApexChartOptions>;

  @ViewChild('reasonParetoChart') reasonParetoChart: ChartComponent;
  public reasonParetoChartOptions: Partial<ReasonParetoChartOptions>;

  @ViewChild('timeLineChart') timeLineChart: ChartComponent;
  public timeLineChartOptions: Partial<TimeLineChartOptions>;

  @ViewChild("lossParetoChart") lossParetoChart: ChartComponent;
  public lossParetoChartOptions: Partial<LineColumnApexChartOptions>;

  @ViewChild('rftPercentChart') rftPercentChart: ChartComponent;
  public rftChartOptions: Partial<GaugePercentApexChartOptions>;

  selectedDateFilter : any;

  constructor(
    private _snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private ngZone: NgZone,
    private settings: SettingsService,
  ) {}

  ngOnInit() {

  }

  daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getFullYear(),
                    anyDateInMonth.getMonth()+1,
                    0).getDate();
  }

  onDateFilterSelected (count){
    this.fromDate = new Date(this.dateFilters[count].from);
    this.toDate = this.dateFilters[count].to;
  }

  fromday= new Date();
  fixedfromday= new Date();
  today = new Date();

  dateFilters = [
    {
      from: this.fromday.setDate(this.today.getDate() - 1),
      to: this.today,
      label: 'Yesterday'
    },
    {
      from: this.fromday.setDate(this.today.getDate() - 2),
      to: this.today,
      label: 'Last 2 Days'
    },
    {
      from: this.fromday.setDate(this.today.getDate() - 7),
      to: this.today,
      label: '1 Week'
    },
    {
      from: this.fromday.setDate(this.today.getDate() - 15),
      to: this.today,
      label: '2 Week'
    },
    {
      from: this.fromday.setDate(this.today.getDate() - this.daysInMonth(this.today)),
      to: this.today,
      label: '1 Month'
    },
    {
      from: this.fromday.setDate(this.today.getDate() - 90),
      to: this.today,
      label: '3 Month'
    },
  ];

  ngAfterViewInit() {
  }

  async initChart(){

  }



  ngOnDestroy() {
    if (this.notifySubscription) {
      this.notifySubscription.unsubscribe();
    }
  }



}
