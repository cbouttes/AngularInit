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

  @Output() // Le type d'un Output est toujours EventEmitter<InputType>
  borderOutputEventEmitter: EventEmitter<BorderOutput> = new EventEmitter<BorderOutput>();



  constructor() { }

  ngOnInit(): void {
  }

  // afficherValue()
  // {
  //   alert(`Size : ${this.childSize}, Radius: ${this.childRadius}`)
  // }


  eventValueChange(){
    let borderOutput :  BorderOutput = {
      childSize: this.childSize,
      childRadius: this.childRadius
    }
    this.borderOutputEventEmitter.emit(borderOutput) // L'Output childEventChange notifie le parent en lui envoyant la valeur actuelle de childSize et childRadius
   }

  eventSizeChange(){
    this.childSizeChange.emit(this.childSize)
    // L'Output childSizeChange notifie le parent en lui
    // envoyant la valeur actuelle de childSize
  }

  eventRadiusChange(){
    this.childRadiusChange.emit(this.childRadius)
    // L'Output childRadiusChange notifie le parent en lui
    // envoyant la valeur actuelle de childRadius
  }

}

export interface BorderOutput {
  childSize : number;
  childRadius : number;
}
