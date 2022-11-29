import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  textColor = '';

  random: number = 0;
  progress: number;

  size:number = 5;
  radius: number = 15;

  currentStyles: Record<string, string> = {};

  constructor() {
    this.getRandomInc();
    this.progress = BindingComponent.randomInteger(25,75)
    this.setCurrentStyles(this.size,this.radius);
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
}
