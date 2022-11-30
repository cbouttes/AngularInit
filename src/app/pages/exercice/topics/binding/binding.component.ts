import { Component, OnInit } from '@angular/core';
import {Border} from "./binding-child/binding-child.component";

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  textColor = '';

  random: number = 0;
  progress: number;

  parentSize:number = 5;
  parentRadius: number = 15;

  currentStyles: Record<string, string> = {};

  constructor() {
    this.getRandomInc();
    this.progress = BindingComponent.randomInteger(25,75)
    this.setCurrentStyles(this.parentSize,this.parentRadius);
  }

  ngOnInit(): void {
  }

  private static randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateProgress(value: number) {
    this.progress += value;
    this.getRandomInc()
  }



  getRandomInc() {
    this.random = BindingComponent.randomInteger(1,25)
  }

  setCurrentStyles(size: number, radius: number) {
    this.currentStyles = {
      'border-radius': radius + 'px',
      'border-width': size + 'px'
    };
  }

  afficherSizeChange(size: number) {
    alert('New Size : ' + size)
  }

  afficherRadiusChange(radius: number) {
    alert('New Radius : ' + radius)
  }

  afficherBorderValues(toto: Border) { // toto <=> $event
    alert(`New size : ${toto.size}, New radius: ${toto.radius}`)
    this.setCurrentStyles(toto.size,toto.radius)
  }

  log($event: Record<string, string>) {
    console.log($event);
    this.currentStyles = $event
  }

}
