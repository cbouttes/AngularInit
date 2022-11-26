import {Component, OnInit} from '@angular/core';
import {Info, Infos} from "../../statics/infos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics: Info[];

  constructor() {
    this.topics = Infos.getValues();
  }

  ngOnInit(): void {
  }

}
