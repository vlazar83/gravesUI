import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TokenApiService {
  apiURL = "https://dev-sm4ylq004f4gs18a.eu.auth0.com/oauth/token";
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=UTF-8",
      Authorization:
        "Basic RFc4T0JBbXdZc244VWlsaEpXMzk2WFh6aUdIWU5lTHA6bmo4VUJPU1RqbXZqN0pLTndIODZqT294UHJxTXl3UkNDZE43R0NhTGhOcDI4UHZzcjh0Y1hOWmFpOFl2Q1hmeQ==",
    }),
  };

  getToken(): Observable<any> {
    return this.http
      .post<any>(
        this.apiURL,
        JSON.stringify({
          audience: "https://gravesAPI",
          grant_type: "client_credentials",
        }),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
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
