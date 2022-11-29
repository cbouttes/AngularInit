import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-binding-child',
  templateUrl: './binding-child.component.html',
  styleUrls: ['./binding-child.component.css']
})
export class BindingChildComponent implements OnInit {

  @Input() // Précise que l'on s'attend à recevoir une valeur
  childSize: number = 2

  @Output() // Le type d'un Output est toujours EventEmitter<InputType>
  childSizeChange: EventEmitter<number> = new EventEmitter<number>(); // Respecter le nommage <inputName> + Change

  @Input()
  childRadius: number = 50

  @Output()
  childRadiusChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  borderEmitter: EventEmitter<Border> = new EventEmitter<Border>();

  constructor() { }

  ngOnInit(): void {
  }

  afficherValue()
  {
    alert(`Size : ${this.childSize}, Radius: ${this.childRadius}`)
  }

  eventSizeChange(){
      this.childSizeChange.emit(this.childSize)
    // L'Output childSizeChange notifie le parent en lui
    // envoyant la valeur actuelle de childSize
  }

  emitBorderValues(){
    const border: Border = {
      radius: this.childRadius,
      size: this.childSize
    }
    this.borderEmitter.emit(border)
  }
}

export interface Border {
  radius: number;
  size: number
}
