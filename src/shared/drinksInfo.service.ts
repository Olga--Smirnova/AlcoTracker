import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Platform } from 'ionic-angular';
//import 'rxjs';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DrinksInfoService {
    private baseUrl = '';
    // if( ionic.Platform.isAndroid() ){
    //     this.baseUrl += "/android_asset/www/";
    // } else {
    //     this.baseUrl += 'assets/json';
    // }

    private drinksInfo: any = {};
    constructor(public http: Http,
                public platform: Platform) {}

    getDrinksInfo() : Observable<any> {
        if (this.platform.is('android'))
        {
            this.baseUrl = "../android_asset/www/";
        } else {
            this.baseUrl = '/assets/json';
        }

        return this.http.get(`${this.baseUrl}/drinks.json`)
        .map((response: Response) => {
            this.drinksInfo = response.json();
            return this.drinksInfo;
        })
    }
}