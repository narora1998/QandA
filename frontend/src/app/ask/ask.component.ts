import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-ask",
  templateUrl: "./ask.component.html",
  styleUrls: ["./ask.component.css"]
})
export class AskComponent {
  categoryChoose: any = "Choose a category...";
  constructor(private apiService: ApiserviceService, private router: Router) {}

  askQuestion(question) {
    document.getElementsByTagName("small")[0].style.display = "inline";
    this.apiService
      .askQuestion(this.categoryChoose, question)
      .subscribe(qAsked => {
        console.log(qAsked);
        setTimeout(() => {
          this.router.navigate(["questions"]);
        }, 1000);
      });
  }
}
