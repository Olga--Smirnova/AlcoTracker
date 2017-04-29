import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import 'rxjs';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DrinksInfoService {
    private baseUrl = '/assets/json';
    private drinksInfo: any = {};
    constructor(public http: Http) {}

    getDrinksInfo() : Observable<any> {
        return this.http.get(`${this.baseUrl}/drinks.json`)
        .map((response: Response) => {
            this.drinksInfo = response.json();
            return this.drinksInfo;
        })
    }
}