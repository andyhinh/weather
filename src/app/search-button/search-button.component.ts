import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {WeatherService} from '../search-detail/search-detail.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css']
})
export class SearchButtonComponent implements OnInit {

  value:string;
  weatherData: any[];
  data:any;

  @Output() eventClicked = new EventEmitter<string>();

  constructor(private _weatherService:WeatherService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    let isnum = /^\d+$/.test(this.value);
    
    if (isnum) {
      this._weatherService.getWeatherByZip(this.value)
      .subscribe( (res) => {
        this.data = res.json();
        this.eventClicked.emit(this.data);
      });
    } else {
      this._weatherService.getWeatherByCity(this.value)
      .subscribe( (res) => {
        this.data = res.json();
        this.eventClicked.emit(this.data);
      });
    }
  }
}
