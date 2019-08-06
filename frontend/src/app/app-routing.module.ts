import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { AskComponent } from "./ask/ask.component";
import { AnswerComponent } from "./answer/answer.component";

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "", redirectTo: "/signup", pathMatch: "full" },
  { path: "signin", component: SigninComponent },
  { path: "home", component: HomeComponent },
  { path: "ask", component: AskComponent },
  { path: "answer", component: AnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
