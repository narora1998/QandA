import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ApiserviceService } from "./apiservice.service";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, SigninComponent, HomeComponent, AskComponent, AnswerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
