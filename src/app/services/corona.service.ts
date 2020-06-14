import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CoronaService {
  constructor(private http: HttpClient) {}
  api = "https://covid19.mathdro.id/api/";
  api2 = "https://api.covid19api.com/";

  public getCountries() {
    return this.http.get(this.api + "countries");
  }
  public getWorldWideData() {
    return this.http.get(this.api2 + "summary");
  }
  getDailyWotldWide() {
    return this.http.get(this.api + "daily");
  }
  getSummarybyCountry(country: string) {
    return this.http.get(this.api2 + "dayone/country/" + country);
  }
  getDayOne(country: string) {
    return this.http.get(this.api2 + "total/dayone/country/" + country);
  }
}
