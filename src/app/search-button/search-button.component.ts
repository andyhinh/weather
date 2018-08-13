import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../search-detail/search-detail.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {

  value:string;
  weatherData: any[];

  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log(this.value);
    let isnum = /^\d+$/.test(this.value);
    let data = "";

    if (isnum) {
      let data = this._weatherService.getWeatherByZip(this.value);
      console.log("isNumber");
    } else {
      let data = this._weatherService.getWeatherByCity(this.value);
    }
    console.log(data);
  }
}
