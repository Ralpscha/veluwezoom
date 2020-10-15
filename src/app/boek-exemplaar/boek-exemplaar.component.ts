import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boek-exemplaar',
  templateUrl: './boek-exemplaar.component.html',
  styleUrls: ['./boek-exemplaar.component.css']
})
export class BoekExemplaarComponent implements OnInit {
  @Input() boek : {titel: string, auteur: string, genre: string};

  constructor() { }

  ngOnInit(): void {
  }

}
