
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatFormFieldModule,
  MatFormFieldControl, 
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
