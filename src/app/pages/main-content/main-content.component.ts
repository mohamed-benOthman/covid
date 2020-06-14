import { Component, OnInit } from "@angular/core";
import { CoronaService } from "src/app/services/corona.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"],
})
export class MainContentComponent implements OnInit {
  nbConfirmed: any;
  nbRecovered: any;
  nbDeaths: any;
  lastDay: any;
  dataAux: any = [];
  data: any = [];
  country: string;
  constructor(
    private coronaService: CoronaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.country = this.route.snapshot.paramMap.get("country");
    if (this.country == "") {
      this.coronaService.getWorldWideData().subscribe((res: any) => {
        this.nbConfirmed = res.Global.TotalConfirmed;
        this.nbRecovered = res.Global.TotalRecovered;
        this.nbDeaths = res.Global.TotalDeaths;
      });
    } else {
      this.coronaService
        .getSummarybyCountry(this.country)
        .subscribe((res: any) => {
          console.log(res[res.length - 1]);
          this.nbConfirmed = res[res.length - 1].Confirmed;
          this.nbDeaths = res[res.length - 1].Deaths;
          this.nbRecovered = res[res.length - 1].Recovered;
        });
      this.coronaService.getDayOne(this.country).subscribe((res: any) => {
        this.dataAux = res;
        const aux = (this.dataAux.length / 6).toString();
        const pas = parseInt(aux.split(".")[0]);
        for (let i = 0; i < this.dataAux.length; i = i + pas) {
          if (i > this.dataAux.length)
            this.data.push(this.dataAux[this.dataAux.length - 1]);
          this.data.push(this.dataAux[i]);
        }
        console.log(this.data);
      });
    }
  }
}
