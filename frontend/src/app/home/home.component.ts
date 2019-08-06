import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  category: any = "Category";

  constructor(apiService: ApiserviceService) {}

  showContent(name) {
    this.category = name;
  }
}
