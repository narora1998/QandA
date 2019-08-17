import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../apiservice.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    username: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
    cpassword: new FormControl(null, Validators.required),
    mobile: new FormControl(null, Validators.required)
  });
  constructor(private apiService: ApiserviceService, private router: Router) {}

  // addUser(name, email, password, mobile) {
  //   this.apiService
  //     .addUser(name, email, password, mobile)
  //     .subscribe((data: any) => {
  //       console.log(data);
  //     });
  // }

  signup() {
    if (!this.signupForm.valid) {
      window.alert("Please Fill All Fields");
      console.log("Form Invalid");
      return;
    }

    if (
      this.signupForm.controls.password.value !=
      this.signupForm.controls.cpassword.value
    ) {
      window.alert("Password / Confirm Password Mismatch");
      return;
    }
    console.log(JSON.stringify(this.signupForm.value));
    console.log(this.signupForm.value);
    this.apiService.addUser(this.signupForm.value).subscribe(user => {
      console.log(user);
      this.router.navigate(["/users/login"]);
    });
  }
}
