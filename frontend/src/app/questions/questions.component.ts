import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";
import { Router } from "@angular/router";
import { TouchSequence } from "selenium-webdriver";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  ques: any;
  ans: any;
  quesAnsArray = [];
  answersArray = [];

  constructor(private apiService: ApiserviceService, private router: Router) {
    this.apiService.viewAllQuestions().subscribe(qData => {
      this.ques = qData;
      for (var i = this.ques.data.length - 1; i >= 0; i--) {
        var obj = {
          _id: this.ques.data[i]._id,
          question: this.ques.data[i].question,
          answer: this.ques.data[i].answer
        };
        this.quesAnsArray.push(obj);
      }
      console.log(this.quesAnsArray[0]._id);
      console.log(qData);
      //console.log(this.quesAnsArray);
    });

    this.apiService.viewAllAnswers().subscribe(aData => {
      this.ans = aData;
      for (var i = this.ans.data.length - 1; i >= 0; i--) {
        var obj = {
          _id: this.ans.data[i]._id,
          answer: this.ans.data[i].answer,
          questionId: this.ans.data[i].questionId
        };
        this.answersArray.push(obj);
      }
      console.log(aData);
      console.log(this.answersArray[2].questionId);
    });
  }

  ngOnInit() {}

  navigateToAnswer(qId) {
    this.router.navigate(["question", qId, "answer", "new"]);
  }
}
