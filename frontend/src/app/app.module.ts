import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ApiserviceService } from "./apiservice.service";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { QuestionsComponent } from "./questions/questions.component";
import { AskComponent } from "./ask/ask.component";
import { AnswerComponent } from "./answer/answer.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditanswerComponent } from './editanswer/editanswer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    QuestionsComponent,
    AskComponent,
    AnswerComponent,
    PagenotfoundComponent,
    EditanswerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
