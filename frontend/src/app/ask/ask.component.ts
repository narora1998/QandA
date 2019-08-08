import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: "app-ask",
  templateUrl: "./ask.component.html",
  styleUrls: ["./ask.component.css"]
})
export class AskComponent {
  constructor(private apiService: ApiserviceService) {}

  askQuestion(category, question) {
    document.getElementsByTagName("small")[0].style.display = "inline";
    this.apiService.askQuestion(category, question).subscribe(qAsked => {
      console.log(qAsked);
    });
  }
}
