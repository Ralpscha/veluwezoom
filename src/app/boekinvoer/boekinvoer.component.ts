import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-boekinvoer',
  templateUrl: './boekinvoer.component.html',
  styleUrls: ['./boekinvoer.component.css']
})
export class BoekinvoerComponent implements OnInit {
  @Output() materiaalToegevoegd = new EventEmitter<{titel: string, auteur: string, genre: string}>();

  nieuweTitel = '';
  nieuweAuteur = '';
  nieuweGenre = '';

  constructor() { }

  ngOnInit(): void {
  }

  onMateriaalToevoegen() {
    this.materiaalToegevoegd.emit({titel: this.nieuweTitel, auteur: this.nieuweAuteur, genre: this.nieuweGenre});
  }

}
