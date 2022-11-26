import {Component} from '@angular/core';
import {Personne} from "../../../../models/personne";
import {Info, Infos} from "../../../../statics/infos";
import {Topic} from "../../../../statics/topic";


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  InputValue: string = 'Yanis';
  date: Date = new Date();
  personne: Personne = {
    nom: 'Grenoir',
    prenom: 'Edward'
  }
  info: Info = <Info>Infos.getInfo(Topic.PIPE)

  constructor() {
  }

}
