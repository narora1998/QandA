import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: "app-editanswer",
  templateUrl: "./editanswer.component.html",
  styleUrls: ["./editanswer.component.css"]
})
export class EditanswerComponent implements OnInit {
  qaId: any;
  question: any;
  answers: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiserviceService
  ) {
    console.log(this.route.snapshot);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.qaId = params;
      console.log(this.qaId.qId);
    });

    this.apiService.viewQuestionById(this.qaId.qId).subscribe(quesObj => {
      console.log("Question Object", quesObj);
      this.question = quesObj;
      console.log(this.question.data.question);
    });

    this.apiService.viewAnswerById(this.qaId.aId).subscribe(ansObj => {
      console.log("Answer Object", ansObj);
      this.answers = ansObj;
      console.log(this.answers.data.answer);
    });
  }

  submitAnswer() {
    console.log(this.answers.data.answer);
    this.apiService
      .updateAnswer(this.answers.data.answer, this.answers.data._id)
      .subscribe(() => {
        console.log("Answer Updated");
      });
  }
}
