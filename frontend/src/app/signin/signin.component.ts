import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent {
  constructor(private apiService: ApiserviceService, private router: Router) {}

  loginUser(email, password) {
    this.apiService.loginUser(email, password).subscribe((token: any) => {
      console.log(token);
      localStorage.setItem("authToken", token.token);
      this.router.navigate([`/questions`]);
    });
  }
}
