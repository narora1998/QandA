import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { QuestionsComponent } from "./questions/questions.component";
import { AskComponent } from "./ask/ask.component";
import { AnswerComponent } from "./answer/answer.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { EditanswerComponent } from "./editanswer/editanswer.component";

const routes: Routes = [
  { path: "question/:id/answer/new", component: AnswerComponent },
  { path: "question/:qId/answer/:aId/edit", component: EditanswerComponent }, //
  { path: "question/:id", component: AnswerComponent },
  { path: "questions/new", component: AskComponent },
  { path: "users/new", component: SignupComponent },
  { path: "users/login", component: SigninComponent },
  { path: "questions", component: QuestionsComponent },
  // { path: "q1", component: QuestionsComponent },
  { path: "answer", component: AnswerComponent },
  { path: "", redirectTo: "/users/new", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
