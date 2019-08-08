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
    return this.http.post("http://localhost:8000/question", obj);
  }

  viewAllQuestions() {
    return this.http.get("http://localhost:8000/question/view");
  }

  viewQuestionById(id) {
    console.log(id.id);
    return this.http.get("http://localhost:8000/question/" + id.id);
  }

  submitAnswer(answer, qId) {
    console.log(answer);
    const obj = { answer, qId };
    return this.http.post("http://localhost:8000/answers", obj);
  }

  viewAllAnswers() {
    return this.http.get("http://localhost:8000/answers/view");
  }
}
