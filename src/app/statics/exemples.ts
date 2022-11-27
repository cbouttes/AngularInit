export interface Exemple {
  content: string,
  default?: any
  desc?: string
}

export const INSTALL_EXEMPLE: Exemple = {
  content: `ng new Project
? Would you like to add Angular routing? (y/N)
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS
  SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]`,
  desc: `Création:
<code>ng new <projectName></code>
Démarrage:
<code>cd <projectName>
ng serve --open</code>`

}

export const PIPE_EXEMPLE: Exemple = {
  content: `<label class="col-12">
  InputValue :
  <input type="text" name="userName" [(ngModel)]="InputValue">
</label>
<label class="col-12">
  Résultat :
  <input type="text" disabled [value]="InputValue | lowercase">
</label>`,
  default: "Yanis"
}

export const ROUTING_EXEMPLE: Exemple = {
  content: `...
<router-outlet></router-outlet> // Emplacement réservé
<app-exemple> // Le composant est inséré à la suite
  ...
</app-exemple>
...`,
  desc: `
<div class="d-flex w-100 flex-wrap">
    <div class="col-12"><code>{ path: 'exemple/:sujet', component: ExempleComponent }</code></div>
    <div class="col-12 d-flex justify-content-between">
    <i class="fa-solid fa-plus"></i>
    <i class="fa-solid fa-arrow-right-long"></i>
    </div>
    <div class="col-6"><code><button routerLink="/exemple/routing">Lien vers l'exemple routing</button></code></div>
</div>`
}

export const FORMS_EXEMPLE: Exemple = {
  content: `<form (submit)="toJsonString()" (reset)="resetForm()" #personForm>
<label class="col-12">
  Nom :
  <input type="text" name="nom" [(ngModel)]="InputValue.nom" required>
</label>
<label class="col-12">
  Prenom :
  <input type="text" name="prenom" [(ngModel)]="InputValue.prenom">
</label>
<label class="col-12">
  Genre :
  <select name="genre" [(ngModel)]="InputValue.genre">
    <option [ngValue]="undefined">Non Renseigné</option>
    <option value="Homme">Homme</option>
    <option [value]="'Femme'">Femme</option>
    <option [value]="otherValue">Autre</option>
  </select>
</label>
<label class="col-12">
  Age :
  <input type="number" name="age" [(ngModel)]="InputValue.age" min="18">
</label>
  <input type="submit" value="Valider" [disabled]="!personForm.checkValidity()">
  <input type="reset" value="Réinitialiser">
</form>
<label class="col-12">
  Résultat :
  <code>{{afterSubmit}}</code>
</label>`,
  default: {nom: "", prenom: "",genre: undefined , age: 0}
}

export const DIRECTIVE_EXEMPLE: Exemple = {
  content: `<p>Les nombres suivants, issus d'un tableau sont utilisés via différentes directives</p>
<div class="d-flex">
    <ng-container *ngFor="let number of [1,24,35,12,85,65,44,58,137,43,67,19]; let first=first">
        <p class="col-1 text-center" [class.pair]="number % 2 === 0" [ngStyle]="{'border': '1px solid #f56a6a'}">
           <ng-container *ngIf="!first">, </ng-container>{{number}}
        </p>
    </ng-container>
</div>`
}
