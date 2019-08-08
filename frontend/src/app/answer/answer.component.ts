import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: "app-answer",
  templateUrl: "./answer.component.html",
  styleUrls: ["./answer.component.css"]
})
export class AnswerComponent implements OnInit {
  qId: any;
  questionDisplay: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiserviceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.qId = params;
      console.log(params);

      this.apiService.viewQuestionById(params).subscribe(qFetched => {
        console.log(qFetched);

        this.questionDisplay = qFetched;
        console.log(this.questionDisplay.data.question);
      });
    });
  }

  submitAnswer(answer) {
    console.log(this.qId.id);
    this.apiService.submitAnswer(answer, this.qId.id).subscribe(answer => {
      console.log(answer);
      this.router.navigate(["/questions"]);
    });
  }
}
