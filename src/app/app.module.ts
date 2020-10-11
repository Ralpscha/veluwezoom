import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoekinvoerComponent } from './boekinvoer/boekinvoer.component';
import { BoekExemplaarComponent } from './boek-exemplaar/boek-exemplaar.component';


@NgModule({
  declarations: [
    AppComponent,
    BoekinvoerComponent,
    BoekExemplaarComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
