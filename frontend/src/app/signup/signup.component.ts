import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  constructor(private apiService: ApiserviceService) {}

  addUser(name, email, password, mobile) {
    this.apiService
      .addUser(name, email, password, mobile)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
