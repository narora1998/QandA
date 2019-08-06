import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  addUser(name, email, password, mobile) {
    const obj = {
      name: name,
      email: email,
      password: password,
      mobile: mobile
    };

    return this.http.post("http://localhost:8000/users", obj);
  }

  loginUser(email, password) {
    const obj = {
      email: email,
      password: password
    };

    return this.http.post("http://localhost:8000/users/login", obj);
  }

  askQuestion(category, question) {
    const obj = {
      question: question,
      cName: category
    };
    console.log(obj);
    this.http.post("http://localhost:8000/question", obj);
  }
}
