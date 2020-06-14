import { Component, OnInit } from "@angular/core";
import { CoronaService } from "src/app/services/corona.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  constructor(private coronaService: CoronaService, private router: Router) {}
  countries: any[];
  ngOnInit(): void {
    this.coronaService.getCountries().subscribe((res: any) => {
      this.countries = res.countries;
    });
  }
  editLink(countryName) {
    switch (countryName) {
      case "US":
        return "https://img.icons8.com/color/32/000000/usa-circular.png";
      case "Korea, South":
        return "https://img.icons8.com/color/32/000000/south-korea-circular.png";
      case "Russia":
        return "https://img.icons8.com/color/32/000000/russian-federation.png";
      default: {
        countryName = countryName.toLowerCase();

        if (countryName.includes(" ")) {
          countryName = countryName.replace(/ /g, "-");
        }

        const link =
          "https://img.icons8.com/color/32/000000/" +
          countryName +
          "-circular.png";
        return link;
      }
    }
  }
  navigate(country: any) {
    this.router
      .navigate(["test/refresh"], { skipLocationChange: true })
      .then(() => {
        this.router.navigateByUrl("/" + country);
      });
  }
}
