import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent {
  signinForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });
  constructor(private apiService: ApiserviceService, private router: Router) {}

  login() {
    if (!this.signinForm.valid) {
      console.log("Form Invalid");
      window.alert("Please Fill All Fields");
      return;
    }
    console.log(this.signinForm.value);

    this.apiService.login(this.signinForm.value).subscribe(status => {
      console.log(status);
      //this.router.navigate["/questions"];
    });
  }
}
