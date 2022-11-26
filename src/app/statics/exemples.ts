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
