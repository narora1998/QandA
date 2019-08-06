import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: "app-ask",
  templateUrl: "./ask.component.html",
  styleUrls: ["./ask.component.css"]
})
export class AskComponent {
  constructor(private apiService: ApiserviceService) {}
  category: any;
  question: any;

  askQuestion(category, question) {
    console.log(category);
    console.log(question);
    this.apiService.askQuestion(category, question).subscribe(qAsked => {
      console.log(qAsked);
    });
  }
}
