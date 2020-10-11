import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoekInvoerComponent } from './boek-invoer/boek-invoer.component';
import { BoekenLijstComponent } from './boeken-lijst/boeken-lijst.component';

@NgModule({
  declarations: [
    AppComponent,
    BoekInvoerComponent,
    BoekenLijstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
