import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mia',
  templateUrl: './mia.component.html',
  styleUrls: ['./mia.component.css']
})
export class MiaComponent implements OnInit {

  @Input()
  timer: number = 9;

  played = true;

  constructor() {
  }

  ngOnInit() {
  }

  animate() {
    this.played = true;
    setTimeout(() => {
      this.played = false;
    }, this.timer * 1000)
  }

}
