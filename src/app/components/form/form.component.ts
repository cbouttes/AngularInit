import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  InputValue: Personne = {nom: "", prenom: "", age: 0}
  otherValue: string = "Autre";

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Personne {
  nom : string;
  prenom: string;
  genre?: string;
  age: number;
}
