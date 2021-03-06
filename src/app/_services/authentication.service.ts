import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { config } from "../_config/config";
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationService {
  constructor(private R: Router, private http: HttpClient) {}

  login(login) {
    return this.http
      .post<any>(`${config.apiUrl}/users/authenticate`, login)
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            console.log("Logging in", user);
          } else {
            console.log("ERROR: user object is", user);
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    console.log("Logging out");
    this.resetAll();
    this.R.navigate(["/login"]);
  }

  resetAll() {
    console.log("Reseting everything");
    localStorage.removeItem("currentUser");
  }
}
