import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boeken = [{ titel: 'Vals licht', auteur: 'Joost Zwagerman', genre: 'roman'},
    {titel: 'Het huis van de toekomst', auteur: 'Chriet Titulaer', genre: 'wetenschappelijk'}];


  onMateriaalToegevoegd(boekData: {titel: string, auteur: string, genre: string}) {
    this.boeken.push({
      titel: boekData.titel,
      auteur: boekData.auteur,
      genre: boekData.genre
    });
  }

}
