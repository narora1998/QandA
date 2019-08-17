import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  addUser(body: any) {
    return this.http.post("http://localhost:8000/users", body, {
      observe: "body"
    });
  }

  login(body) {
    console.log(body);
    return this.http.post("http://localhost:8000/users/login", body, {
      observe: "body"
    });
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
    console.log(id);
    return this.http.get("http://localhost:8000/question/" + id);
  }

  submitAnswer(answer, qId) {
    console.log(answer);
    const obj = { answer, qId };
    return this.http.post("http://localhost:8000/answers", obj);
  }

  viewAllAnswers() {
    return this.http.get("http://localhost:8000/answers/view");
  }

  viewAnswerById(id) {
    return this.http.get("http://localhost:8000/answer/" + id);
  }
  editAnswer(aId, qId) {
    return this.http.get(
      "http:localhost:8000/question/" + qId + "answer/" + aId + "/edit"
    );
  }

  updateAnswer(upAnswer, id): Observable<void> {
    const obj = { upAnswer };
    return this.http.put<void>(`http://localhost:8000/answer/` + id, obj);
  }

  deleteAnswer(id): Observable<void> {
    return this.http.delete<void>(
      `http://localhost:8000/answer/` + id + `/delete`
    );
  }
}
