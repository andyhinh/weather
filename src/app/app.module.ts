
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { WeatherService } from './search-detail/search-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SearchButtonComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpModule
  ],
  providers: [ WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
