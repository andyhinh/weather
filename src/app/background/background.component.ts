import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  weather: string;

  constructor() { }

  ngOnInit() {
    this.weather = "../../assets/clear.gif";
  }

  changeBackground(weatherStat) {
    if (weatherStat === "Rain" || weatherStat === "Light Rain" || weatherStat === "Heavy Rain") {
      this.weather = "../../assets/rain.gif";
    } else if (weatherStat === "Partly Cloudy") {
      this.weather = "../../assets/partlyCloud.gif";
    } else if (weatherStat === "Clear") {
      this.weather = "../../assets/clear.gif";
    } else if (weatherStat === "Snow") {
      this.weather = "../../assets/AlpineClouds.gif";
    } else if (weatherStat === "Cloudy") { 
      this.weather = "../../assets/cityCloud.gif"
    } else {
      this.weather = "../../assets/partlyCloud.gif";
    }
  }
}
