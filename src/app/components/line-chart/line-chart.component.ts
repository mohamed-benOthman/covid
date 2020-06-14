import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectorRef,
  IterableDiffer,
  IterableDiffers,
  IterableChanges,
  DoCheck,
} from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"],
})
export class LineChartComponent implements OnInit, DoCheck {
  constructor(private _iterableDiffers: IterableDiffers) {}
  @Input() data: any;
  data2: string;
  private _diff: IterableDiffer<any>;

  ngOnInit(): void {
    this._diff = this._iterableDiffers.find(this.data).create();
    console.log(this.data);
  }
  deathsData: any = [];
  recoveredData = [];
  confirmedData = [];
  labelDates = [];
  activeData = [];
  public ngDoCheck(): void {
    const changes: IterableChanges<number> = this._diff.diff(this.data);

    if (changes) {
      for (let item of this.data) {
        this.deathsData.push(parseInt(item.Deaths));
        this.labelDates.push(this.convertDate(item.Date));
        this.recoveredData.push(parseInt(item.Recovered));
        this.confirmedData.push(parseInt(item.Confirmed));
        this.activeData.push(parseInt(item.Active));
      }
    }
  }
  public lineChartData: ChartDataSets[] = [
    { data: this.confirmedData, label: "Confirmed" },
    { data: this.deathsData, label: "Deaths" },
    { data: this.recoveredData, label: "Recovered" },
    { data: this.activeData, label: "Active" },
  ];
  public lineChartLabels: Label[] = this.labelDates;
  public lineChartOptions: any & { annotation: any } = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(255,0,0,0.3)",
    },
    {
      borderColor: "rgba(246, 36, 89, 1)",
      backgroundColor: "rgba(224, 130, 131, 1)",
    },
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];
  convertDate(myDate: string) {
    return myDate.split("T")[0];
  }
}
