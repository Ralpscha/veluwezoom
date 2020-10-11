import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boek-exemplaar',
  templateUrl: './boek-exemplaar.component.html',
  styleUrls: ['./boek-exemplaar.component.css']
})
export class BoekExemplaarComponent implements OnInit {
  @Input() boek : {genre: string, titel: string, auteur: string};

  constructor() { }

  ngOnInit(): void {
  }

}
