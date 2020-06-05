import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { User } from "./user.model";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: User) {
        if (!user.email || !user.password) {
            return throwError("Wprowadz email i haslo");
        }
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }

    addPoint(user: User, point: number) {
        user.point += point;  
    }
}