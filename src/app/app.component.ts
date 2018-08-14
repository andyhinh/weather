import { Component, ViewChild } from '@angular/core';
import { SearchDetailComponent} from './search-detail/search-detail.component';
import { BackgroundComponent } from './background/background.component';
import { $ } from '../../node_modules/protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SearchDetailComponent) child : SearchDetailComponent;
  @ViewChild(BackgroundComponent) background : BackgroundComponent;

  public dataSent: string;
  title = 'weather';

  childEventClicked($event) {
    this.roundTemperature($event);
    this.dataSent = $event;
    this.setWeatherStatus($event); 

    console.log(this.dataSent);
  }

  roundTemperature($event) {
    $event.main.temp = Math.round($event.main.temp);
  }

  setWeatherStatus($event) {
    if ($event.clouds.all < 16) {
      this.child.weatherStatus = "Clear";
    } else if ($event.clouds.all < 60) {
      this.child.weatherStatus = "Partly Cloudy";
    } else {
      this.child.weatherStatus = "Cloudy";
    }

    for (let i = 0; i < $event.weather.length; i++) {
      if ($event.weather[i].main === "Rain") {
        this.child.weatherStatus = "Rain";
      } 
      
      if ($event.weather[i].description === "thunderstorm") {
        this.child.weatherStatus = "Thunderstorm";
        break;
      } else if ($event.weather[i].description === "light rain") {
        this.child.weatherStatus = "Light Rain";
      } else if ($event.weather[i].description === "heavy intensity rain") {
        this.child.weatherStatus = "Heavy Rain";
      } else if ($event.weather[i].main === "Snow") {
        this.child.weatherStatus = "Snow";
        break;
      } else if ($event.weather[i].main === "Extreme") {
        this.child.weatherStatus = "Extreme";
        break;
      }
    }

    this.background.changeBackground(this.child.weatherStatus);
    return;
  }
}
