import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { AppError } from "../common/appErro";
import { NotFoundError } from "../common/notFoundError";
import { BadInput } from "../common/bad-input";

// @Injectable({
//   providedIn: "root",
// })
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getAll(limit?: number) {
    return this.http.get(this.url+'/'+limit).pipe(catchError(this.handleError));
  }

  getOne(slug: string) {
    return this.http.get(this.url + '/' + slug).pipe(catchError(this.handleError));
  }

  create(ressource) {
    return this.http
      .post(this.url, ressource)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: Response) {
    if (error.status === 404) {
      alert(error.status);
      console.error(error);
      return Observable.throw('page not found');
    }
    if (error.status === 400) {
      return Observable.throw(new BadInput);
    }
    return Observable.throw(new AppError);
  }
}
