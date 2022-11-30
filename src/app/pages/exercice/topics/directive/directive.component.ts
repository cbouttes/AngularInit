import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  nom: string = '';
  age: number = 18;
  pref: string = '#FFFFFF'

  userColors: UserColor[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  addNew() {
    console.log("addNew() : ");
    this.userColors.push({age: this.age, color: this.pref, nom: this.nom});
    this.nom = '';
    this.age= 18;
    this.pref = '#FFFFFF'
  }
}

interface UserColor {
  nom: string;
  age: number;
  color: string;
}
