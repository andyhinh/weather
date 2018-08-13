import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: Http) { 
    console.log('Production='+ environment.production);
  }

  getWeatherByCity(cityName): Observable<any[]>{

    return this.http.get(environment.baseUrl +'weather?q='+ cityName +'&appid='+ environment.appId +'&units=' + environment.units)
    .pipe(map(response => this.extractData(response)),
    catchError( error => {
      return this.handleError(error);
    }))
  }

  getWeatherByZip(zipCode) {
    return this.http.get(environment.baseUrl +'weather?zip='+ zipCode +',us&appid='+ environment.appId +'&units=' + environment.units)
    .pipe(map(response => this.extractData(response)),
    catchError( error => {
      return this.handleError(error);
    }))
  }

  private extractData(res: any) {
  let body = res.json();
  return body.list || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
      errMsg = error.message ? error.message : error.toString();
    //}
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}