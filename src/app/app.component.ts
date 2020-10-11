import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boeken = [{genre: 'roman', titel: 'Vals licht', auteur: 'Joost Zwagerman'},
    {genre: 'wetenschappelijk', titel: 'Het huis van de toekomst', auteur: 'Chriet Titulaer'}];
}
