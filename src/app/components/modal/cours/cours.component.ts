import {Component, Inject, OnInit} from '@angular/core';
import {Chapitre, Cours} from "../../../models/cours";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  cours: Cours

  constructor(@Inject(MAT_DIALOG_DATA) private data: Cours) {
    this.cours = data;
  }

  ngOnInit(): void {
  }

}
