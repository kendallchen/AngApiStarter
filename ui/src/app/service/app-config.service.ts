import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {

    private config: Object;
    public configSubject$: Subject<Object> = new Subject<Object>();

    constructor(private _http: HttpClient) { }

    public load() {
        return this._http.get('./assets/config/app-config.json')
            .toPromise()
            .then((config: Object) => {
                this.config = config;
                this.configSubject$.next(this.config);
            })
            .catch((err: Object) => {
                console.error(err);
            })
    }

    get(key: string) { 
        return this.config[key];
    }
}