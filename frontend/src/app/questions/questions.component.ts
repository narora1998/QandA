import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.css"]
})
export class QuestionsComponent implements OnInit {
  filter: any = "All";
  ques: any;
  ans: any;
  quesAnsArray = [];
  answersArray = [];

  constructor(private apiService: ApiserviceService, private router: Router) {}

  ngOnInit() {
    this.apiService.viewAllQuestions().subscribe(qData => {
      this.ques = qData;
      for (var i = this.ques.data.length - 1; i >= 0; i--) {
        var obj = {
          _id: this.ques.data[i]._id,
          question: this.ques.data[i].question,
          // answer: this.ques.data[i].answer,
          cName: this.ques.data[i].cName
        };
        this.quesAnsArray.push(obj);
      }
      console.log("We are here");
      console.log(qData);
      //console.log(this.quesAnsArray);
      console.log(this.filter);
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
      //console.log(this.answersArray[2].questionId);
    });
  }

  navigateToAnswer(qId) {
    this.router.navigate(["question", qId, "answer", "new"]);
  }

  editAnswer(qId, aId) {
    this.router.navigate(["question", qId, "answer", aId, "edit"]);
  }

  deleteAnswer(aId) {
    this.apiService.deleteAnswer(aId).subscribe(() => {
      console.log(aId + "was deleted");
    });
    if (
      window.confirm("Are you sure you want to delete? This cannot be undone.")
    ) {
      window.location.reload();
    }
  }
}
