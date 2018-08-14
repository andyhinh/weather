import { Component, ViewChild } from '@angular/core';
import { SearchDetailComponent} from './search-detail/search-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SearchDetailComponent) child : SearchDetailComponent;

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
    if ($event.clouds.all < 21) {
      this.child.weatherStatus = "Clear";
    } else if ($event.clouds.all < 65) {
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
      } else if ($event.weather[i].description === "light rain") {
        this.child.weatherStatus = "Light Rain";
      } else if ($event.weather[i].description === "heavy intensity rain") {
        this.child.weatherStatus = "Heavy Rain";
      }
    }
    return;
  }
}
