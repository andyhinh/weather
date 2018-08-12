import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export class WeatherService {
  constructor(private http: Http) { 
    console.log('Production='+ environment.production);
  }

  getWeatherByCity(cityName): Observable<any[]>{

    return this.http.get(environment.baseUrl +'weather?q='+ cityName +'&appid='+ environment.appId +'&units=' + environment.units)
    .map(response => this.extractData(response))
    .catch(this.handleError);
  }

  getWeatherByZip(zipCode): Observable<any[]> {
    return this.http.get(environment.baseUrl +'weather?zip='+ zipCode +',us&appid='+ environment.appId +'&units=' + environment.units)
    .map(response => this.extractData(response))
    .catch(this.handleError);
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