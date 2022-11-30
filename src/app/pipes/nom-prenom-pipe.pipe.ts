import {Pipe, PipeTransform} from '@angular/core';
import {Personne} from "../models/personne";

@Pipe({
  name: 'nomPrenomPipe'
})
export class NomPrenomPipePipe implements PipeTransform {

  transform(personne: Personne): string {

    return 'Je suis '+ personne.nom.toUpperCase()+' '+personne.prenom.toUpperCase()+' :';
  }

}
