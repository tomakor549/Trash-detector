import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Config } from "../config";
import { Trash } from "./trash.model";

@Injectable()
export class GroceryService {
    baseUrl = Config.apiUrl + "appdata/" + Config.appKey + "/Trash";

    constructor(private http: HttpClient) { }

    load() {
        // sortowanie wg. daty dodania zgodnie ze skladnia specyficzną dla Kinvey
        let params = {
            "sort": "{\"_kmd.lmt\": 1}"
        }
        
    }

    add(name: string) {
        
    }

    getCommonHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": "Kinvey " + Config.token
        }
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }
    
    delete(id: string) {
        
    }
}