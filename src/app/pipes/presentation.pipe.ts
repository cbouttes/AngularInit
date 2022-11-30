import { Pipe, PipeTransform } from '@angular/core';
import {Personne} from "../models/personne";

@Pipe({
  name: 'presentation'
})
export class PresentationPipe implements PipeTransform {

  transform(value: Personne): string {
    return "Je suis " + value.nom.toUpperCase() + " " + value.prenom;
  }

}
