import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GravesApiService {
  apiURL = "http://localhost:50001/graves?location=";
  constructor(private http: HttpClient) {}

  getGraveDetails(id: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + localStorage.getItem("gravesAPI_JWT"),
      }),
    };

    return this.http.get<any>(this.apiURL + id, httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
