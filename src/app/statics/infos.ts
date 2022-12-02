import {Topic} from "./topic";
import {Routes} from "@angular/router";
import {PipeComponent} from "../pages/exercice/topics/pipe/pipe.component";
import {Chapitre} from "../models/cours";
import {TemplateRef} from "@angular/core";
import {
  DIRECTIVE_EXEMPLE,
  Exemple,
  FORMS_EXEMPLE,
  INSTALL_EXEMPLE,
  OBSERVABLE_EXEMPLE,
  PIPE_EXEMPLE,
  ROUTING_EXEMPLE
} from "./exemples";
import {InstallComponent} from "../pages/exercice/topics/install/install.component";
import {BindingComponent} from "../pages/exercice/topics/binding/binding.component";
import {ShematicsComponent} from "../pages/exercice/topics/shematics/shematics.component";
import {StructureComponent} from "../pages/exercice/topics/structure/structure.component";
import {DirectiveComponent} from "../pages/exercice/topics/directive/directive.component";
import {FormsComponent} from "../pages/exercice/topics/forms/forms.component";
import {routes_exercice} from "../app-routing.module";
import {RoutingComponent} from "../pages/exercice/topics/routing/routing.component";
import {ObservablesComponent} from "../pages/exercice/topics/observables/observables.component";

export interface Info {
  route: string,
  title: string,
  texte: string,
  chapitres: Chapitre[],
  children: any[],
  icon?: string,
  exemple?: Exemple,
  ref?: TemplateRef<any>
}

export class Infos {
  private static topicsInfos: Map<Topic, Info> = new Map<Topic, Info>([
    [
      Topic.INSTALL,
      {
        route: 'Install',
        title: 'Installation',
        icon: 'fa-brands fa-angular',
        texte: 'Une fois les prérequis vérifiés et Angular CLI installé, 2 commandes suffisent à générer et démarrer un project fonctionnel.',
        chapitres: [
          {
            nom: "Prérequis",
            texte: `Afin d'utiliser le Framework Angular, les connaissances suivantes sont nécessaires :
<ul>
<li><a href="https://developer.mozilla.org/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript</a></li>
<li><a href="https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML">HTML</a></li>
<li><a href="https://developer.mozilla.org/docs/Learn/CSS/First_steps">CSS</a></li>
</ul>
De plus une approche de <a href="https://www.typescriptlang.org">TypeScript</a> est recommandée mais pas obligatoire.

L'installation d'Angular requiert la présence de <a href="https://nodejs.org" title="Nodejs.org">Node.js</a>, et du <a href="https://docs.npmjs.com/cli/install">npm client</a> installé par défaut avec lui.
Les commandes suivantes exécutées dans un terminal permettent de vérifier leur présence :
<code>node -v   //Version de Node.js
npm -v  //Version du Node Package Manager</code>`
          },
          {
            nom: "Angular CLI",
            texte: `Angular CLI fournit le nécessaire afin créer un projet et effectuer les actions qui lui sont associées. Son installation se fait via la commande ci-après:
<code>npm install -g @angular/cli</code>
Et la vérification de sa version par celle-ci:
<code>ng v</code>`
          },
          {
            nom: "Astuces",
            texte: `Il est parfois souhaitable d'installer une version particulière d'un package, pour cela utilisera les syntaxes suivantes :
<code>npm install <name>@<version>
npm i <name>@<version>
ng add <name>@<version>
</code>
Pour plus de précisions et de possibilités: <a href="https://docs.npmjs.com/cli/install">npm Docs</a>`
          }
        ],
        exemple: INSTALL_EXEMPLE,
        children: [InstallComponent]
      }
    ],
    [
      Topic.STRUCTURE,
      {
        route: 'Structure',
        title: "Structure",
        texte: `<p>Une application web utilisant le Framework Angular est dite "Single Page" : La navigation va être simulée au sein de la page 'racine' (index.html).</p>

<div class="d-flex text-exemple">
    <div class="col-6 d-flex flex-column justify-content-center">
        <p>Par défaut, la génération d'un projet produit l'architecture ci-contre.</p>
        <p>A la racine du projet se trouvent les fichiers de configuration du CLI, des dépendances et de TypeScript.</p>
        <p>Les points d'entrée de l'application et les éléments statiques sont réunis sous src</p>
        <p>A l'intérieur du dossier app, la logique de l'application voit le jour.</p>
    </div>
    <div class="col-6 d-flex" style="justify-content: center">
        <div class="d-flex flex-wrap struct-scheme">
            <div class="col-12 folder">Project</div>
            <div class="col-1 flex-grow-1 folder-border"></div>
            <div class="col-11 d-flex flex-wrap">
                <div class="col-12 folder">src</div>
                <div class="col-1 flex-grow-1 folder-border"></div>
                <div class="col-11 d-flex flex-wrap">
                    <div class="col-12 folder">app</div>
                    <div class="col-1 flex-grow-1 folder-border"></div>
                    <div class="col-11 d-flex flex-wrap">
                        <div class="col-12 css-file">app.component.css</div>
                        <div class="col-12 html-file">app.component.html</div>
                        <div class="col-12 code-file">app.component.spec.ts</div>
                        <div class="col-12 code-file">app.component.ts</div>
                        <div class="col-12 code-file">app.module.ts</div>
                        <div class="col-12 code-file">app-routing.module.ts</div>
                    </div>
                    <div class="col-12 folder">assets</div>
                    <div class="col-12 folder">environments</div>
                    <div class="col-1 flex-grow-1 folder-border"></div>
                    <div class="col-11 d-flex flex-wrap">
                        <div class="col-12 code-file">environment.prod.ts</div>
                        <div class="col-12 code-file">environment.ts</div>
                    </div>
                    <div class="col-12 html-file">index.html</div>
                    <div class="col-12 code-file">main.ts</div>
                    <div class="col-12 css-file">styles.css</div>
                </div>
                <div class="col-12 config-file">angular.json</div>
                <div class="col-12 config-file">package.json</div>
                <div class="col-12 config-file">tsconfig.json</div>
            </div>
            </div>
        </div>
    </div>
</div>`,
        icon: 'fa-solid fa-folder-tree',
        chapitres: [
          {
            nom: 'Configuration',
            texte: `<a href="https://angular.io/guide/workspace-config" target="_blank">Plus d'Infos</a>`,
            chapitres: [
              {
                nom: 'package.json',
                texte: `Les packages nécessaire au fonctionnement de l'application sont identifiés dans le fichier package.json.
Par défaut, il contiens les informations relatives au projet, les commandes de base pour le build ainsi que l'exécution du livrable et une liste des dépendances de base.
Les packages ajoutés via les commandes d'installation (ng add, ...) seront ajoutées aux dépendances déjà présentes.
Durant l'installation, une liste complète des dépendances est générée et est retranscrite dans le fichier package-lock.json.

Il est possible que des conflits de dépendances surgissent lors d'ajout de packages, dans cette situation des options peuvent être ajoutées à la commande d'installation :
<code>npm install --legacy-peer-deps //Tente de reconstruire l'arbre des dépendances
npm install --force //Force l'installation (peut générer des conflits ultérieurs)</code>

A la fin processus, des avertissements peuvent survenir si des vulnérabilités sont détectées.
Il s'agit souvent de problèmes pouvant être résolus par une mise à jour des packages, ce qui peut être réalisé par la commande :
<code>npm audit fix</code>
L'audit calcule l'impact des vulnérabilités et les corrections nécessaires, l'argument fix applique ces corrections à l'arbre des dépendances.
A noter que la commande 'npm audit fix' exécute la commande 'npm install' en arrière-plan, les options passée à la première sont transmises à la seconde:
<code>npm audit fix --force
//Exécutera 'npm install --force' pour les packages correctifs</code>
Certaines corrections ne peuvent être effectuées automatiquement, il faudra donc supprimer le fichier 'package-lock.json' ainsi que le le répertoire 'node_modules' (ou le module problématique si il a été identifié) avant de retenter une installation.`

              },
              {
                nom: 'angular.json',
                texte: `Le fichier racine angular.json contiens la configuration de l'espace de travail courant et ce présente sous cette forme : (<a href="https://angular.io/guide/workspace-config" target="_blank">Plus d'Infos</a>)
<code>{
  ...
  "version": 1,\t// Version du fichier de configuration
  "newProjectRoot": "projects",\t// Balise racine de la liste des projets
  "projects": {
    "Project": { // Nom du projet
      "projectType": "application", // Type de projet 'application' ou 'library'
      ...
      },
      "root": "",\t// Dossier parent du sourceRoot (Vide pour le projet initial)
      "sourceRoot": "src",\t// Dossier parent des fichiers projet
      "prefix": "app",\t// Prefix par défaut des sélecteurs
      "architect": {\t// Définition des targets des commandes du CLI
        "build": {\t// Ex: Configuration de la commande ng build
          "builder": "@angular-devkit/build-angular:browser",\t// Package npm utilisé
          "options": {
            ...
            "outputPath": "dist/project",\t// Chemin du dossier qui contiendra les fichiers apres build
            "index": "src/index.html",\t// Fichier html racine
            "main": "src/main.ts",\t// Script d'entrée
            ...
            "tsConfig": "tsconfig.app.json", // Chemin du fichier de configuration TSLint
            "assets": [\t// Chemin des assets statiques présents dans le contexte global
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [\t// Liste des styles globaux
              ...
              "src/styles.css",
              ...
            ],
            "scripts": [\t// Liste des scripts globaux
\t\t\t  ...
              "src/assets/js/html.js"
\t\t\t  ...
            ]
\t// Les styles et scripts sont chargé de la même façon que le feraient des balises dans index.html
          },
          "configurations": {\t// Définition de configurations particulières
            "production": {
              "budgets": [...],\t// Allocation de mémoire pour les erreurs/avertissements
              "fileReplacements": [\t// Définition des fichiers de remplacement pour la configuration actuelle.
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              [...]
            },
            "development": {[...]}
          },
          "defaultConfiguration": "production" // Configuration par défaut si non précisée
        },
        "serve": {[...]},
        "extract-i18n": {[...]},
        "test": {[...]}
      }
    }
  }
}</code>`
              },
              {
                nom: 'tsconfig.json',
                texte: `TypeScript est le langage principal pour le développement d'applications Angular. Il s'agit d'une surcouche de JavaScript avec prise en charge au moment de la conception de la sécurité des types et des outils.
Les navigateurs ne peuvent pas exécuter directement ce langage qui doit être "transpilé" en JavaScript à l'aide du compilateur tsc , ce qui nécessite une certaine configuration.
À la racine du projet, le fichier tsconfig.json spécifie les options de base du compilateur TypeScript. Ce fichier est modifiable et adaptable, mais nous ne nous y attarderons pas.
Pour toutes informations supplémentaires, consultez la <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html" target="_blank">Documentation Officielle</a>`
              }
            ]
          },
          {
            nom: 'Racine',
            texte: `Les fichiers suivants sont les points d'entrée (par défaut) de l'application :`,
            chapitres: [
              {
                nom: 'index.html',
                texte: `Il s'agit de la page HTML principale au sein de laquelle la navigation va être simulée. Ceci signifie que tout ce qui est présent dans ce template le restera pour toutes les "pages".`
              },
              {
                nom: 'styles.css',
                texte: `Feuille de style commune à l'ensemble du projet, son extension est celle choisie lors de la création du projet.`
              },
              {
                nom: 'main.ts',
                texte: `Point d'entrée de l'application en charge de la compilation et du lancement du module racine (AppModule).`
              },
              {
                nom: 'assets/',
                texte: `Comme défini dans la configuration, ce dossier est prêt à contenir les ressources du projet (Styles, Scripts, Medias, etc).`
              },
              {
                nom: 'environnements/',
                texte: `Généré par défaut avec 2 fichiers (environment.ts et environment.prod.ts) ce dossier et ces fichiers sont prêts à contenir des données statiques utilisables n'importe ou (mais ce n'est pas la seule façon de faire).`
              }
            ]
          }
        ],
        children: [StructureComponent]
      }
    ],
    [
      Topic.SCHEMATICS,
      {
        route: 'Schematics',
        title: "Schematics",
        texte: `<p>Angular encourage à suivre les principes de modularité et de réutilisabité, sans pour autant les rendre obligatoires.
Ces derniers facilitent la prise en compte de la logique de votre application et ce, en différenciant des "parties" que l'on appellera "schematics". Parmi eux, on distinguera essentiellement les composants et les services.</p>

<div class="d-flex text-exemple">
    <div class="col-6 d-flex flex-column justify-content-center">
    <p>Idéalement, le travail d'un composant consiste à activer uniquement l'expérience utilisateur. Un composant doit présenter des propriétés et des méthodes de liaison de données pour assurer la médiation entre la vue et la logique d'application.</p>
<p>Un composant doit utiliser des services pour des tâches qui n'impliquent pas la vue ou la logique d'application. En définissant ces tâches de traitement dans une classe de service injectable , vous rendez ces tâches disponibles pour n'importe quel composant.</p>
<p>Il est également possible pour les services (comme pour les composants) d'utiliser des modèles pour spécifier les attributs et éventuellement le comportement des données.</p>
<p>En exploitant les principes évoqués plus tôt, on peut retrouver une architecture semblable à celle ci-contre au sein d'un projet.</p>
    </div>
    <div class="col-6 d-flex" style="justify-content: center">
        <div class="d-flex flex-wrap struct-scheme" style="width: inherit">
            <div class="col-12 folder">app</div>
            <div class="col-1 flex-grow-1 folder-border"></div>
            <div class="col-11 d-flex flex-wrap">
                <div class="col-12 folder">components</div>
                <div class="col-1 flex-grow-1 folder-border"></div>
                <div class="col-11 d-flex flex-wrap">
                    <div class="col-12 folder">header</div>
                    <div class="col-1 flex-grow-1 folder-border"></div>
                        <div class="col-11 d-flex flex-wrap">
                        <div class="col-12 css-file">app.header.css</div>
                        <div class="col-12 html-file">app.header.html</div>
                        <div class="col-12 code-file">app.header.spec.ts</div>
                        <div class="col-12 code-file">app.header.ts</div>
                    </div>
                    <div class="col-12 folder">...</div>
                </div>
                <div class="col-12 folder">models</div>
                    <div class="col-1 flex-grow-1 folder-border"></div>
                        <div class="col-11 d-flex flex-wrap">
                        <div class="col-12 code-file">my-object.spec.ts</div>
                        <div class="col-12 code-file">my-object.ts</div>
                        <div class="col-12 code-file">...</div>
                    </div>
                <div class="col-12 folder">pages</div>
                <div class="col-1 flex-grow-1 folder-border"></div>
                <div class="col-11 d-flex flex-wrap">
                    <div class="col-12 folder">dashboard</div>
                    <div class="col-1 flex-grow-1 folder-border"></div>
                        <div class="col-11 d-flex flex-wrap">
                        <div class="col-12 css-file">app.dashboard.css</div>
                        <div class="col-12 html-file">app.dashboard.html</div>
                        <div class="col-12 code-file">app.dashboard.spec.ts</div>
                        <div class="col-12 code-file">app.dashboard.ts</div>
                    </div>
                    <div class="col-12 folder">...</div>
                </div>
                <div class="col-12 folder">services</div>
                <div class="col-1 flex-grow-1 folder-border"></div>
                    <div class="col-11 d-flex flex-wrap">
                    <div class="col-12 code-file">my-service.spec.ts</div>
                    <div class="col-12 code-file">my-service.ts</div>
                    <div class="col-12 code-file">...</div>
                </div>
                <div class="col-12 css-file">app.component.css</div>
                <div class="col-12 html-file">app.component.html</div>
                <div class="col-12 code-file">app.component.spec.ts</div>
                <div class="col-12 code-file">app.component.ts</div>
                <div class="col-12 code-file">app.module.ts</div>
                <div class="col-12 code-file">app-routing.module.ts</div>
            </div>
        </div>
    </div>
</div>`,
        icon: 'fa-solid fa-pen-ruler',
        chapitres: [
          {
            nom: 'Component',
            texte: `Le composant est le principal bloc des applications Angular.
Il peut être généré via la commande :
<code>ng generate component <component-name> // ng g c <component-name></code>
Ou manuellement en le constituant de la façon suivante (similaire au composant racine : app-root) :`,
            chapitres: [
              {
                nom: 'app.component.ts',
                texte: `Une classe TypeScript qui définit le comportement du composant. On y retrouve une définition des éléments et les liens vers eux :
<code>@Component({
  selector: 'app-root', // Balise par laquelle sera appelé le composant
  templateUrl: './app.component.html', // Lien vers le template si non défini explicitement
  styleUrls: ['./app.component.css']
})</code>`
              },
              {
                nom: 'app.component.html',
                texte: `Un template HTML qui déclare ce qui s'affiche dans le composant. Il est capable d'utiliser et d'afficher les variables définies dans le ts ainsi que d'en appeler les méthodes :
<code>@Component({
  selector: 'app-root',
  template: \`Titre : {{title}}
  <button type="button" (click)="changeTitle()">Changer le titre</button>\`
})
export class AppComponent {
  title = 'Project';
    changeTitle(): void {
    this.title = "Angular Tutorial"
  }
}</code>`
              },
              {
                nom: 'app.component.css',
                texte: `Un fichier CSS qui définit comment les éléments sont affichés dans le template`
              },
              {
                nom: 'app.component.spec.ts',
                texte: `Facultativement, une classe TypeScrypt "Spec" pour les test.`
              }
            ]
          },
          {
            nom: 'Service',
            texte: `Le service est une vaste catégorie englobant toute valeur, fonction ou caractéristique dont une application a besoin. Il s'agit généralement une classe avec un objectif bien défini distingué des composants pour augmenter la modularité et la réutilisabilité.
Il doit faire quelque chose de spécifique et convient aux tâches telles que la récupération de données à partir du serveur, la validation des entrées utilisateur ou la connexion directe à la console.

L'injection de dépendances rend ces services disponibles pour les composants : Lorsque Angular crée une nouvelle instance d'une classe de composant, il détermine les services ou autres dépendances dont le composant a besoin en examinant les types de paramètres du constructeur.
<code>import {Component} from '@angular/core';
import {LibraryService} from '../../../services/library.service';

@Component({...})
export class LibraryComponent {
  constructor(private service: LibraryService) { // Le composant Library à besoin du LibraryService
  }
}</code>
Lorsque Angular découvre qu'un composant dépend d'un service, il vérifie d'abord si l'injecteur possède des instances existantes de ce service. Si une instance de service demandée n'existe pas encore, l'injecteur en crée une en utilisant le fournisseur enregistré et l'ajoute à l'injecteur avant de renvoyer le service au composant.
Par défaut, un service est généré par la commande :
<code>ng generate service [service-name] // ng g s [service-name]</code>
Et celui-ci est automatiquement enregistré auprès de l'injecteur racine de votre projet en incluant ces métadonnées dans le décorateur :
<code>@Injectable({
 providedIn: 'root',
})</code>
Ceci garantis qu'une seule instance du service est disponible pour l'ensemble de l'application. Pour d'autres méthodes d'injection, voir la <a href="https://angular.io/guide/architecture-services#providing-services" target="_blank">Documentation Officielle</a>`
          },
          {
            nom: 'Class / Interface',
            texte: `Pour respecter la modularité au sein de l'application, il préférable (mais pas obligatoire) de définir les modèles dans des classes / interfaces explicites. L'objectif étant de garantir, quelque soit le service ou composant utilisant le modèle, la conformité des accès aux données et prévenir les erreurs à l'exécution.
Il est possible de générer la structure de base à l'aide des commandes :
<code>ng generate class [name] // ng g cl [name]
ng generate interface [name] // ng g i [name]</code>
Toutefois, il ne s'agit en fait que de simple fichier TypeScript exportant une classe ou une interface, il est donc aisé de les créer manuellement.
La différence essentielle entre les deux définition réside dans la nécessité d'instancier les valeurs (que ce soit par champ ou constructeur).`
          }
        ],
        children: [ShematicsComponent]
      }
    ],
    [
      Topic.BINDING,
      {
        route: 'Binding',
        title: 'Data Binding',
        icon: 'fas fa-link',
        chapitres: [
          {
            nom: "Source ↦ Vue",
            texte: `La méthode la plus simple pour lier une donnée est de la transférer vers la vue et cela est possible de 2 façons :`,
            chapitres: [
              {
                nom: "{{Interpolation}}",
                texte: `Utilisé directement pour l'affichage, l'interpolation implique l'utilisation des {{}}, intimement appelées "Balise Moustache"
                <code> {{expression}} </code>
Le résultat obtenu est alors l'affichage de la valeur de "expression" et sa mise à jour en cas de changement.`
              },
              {
                nom: "[Property]",
                texte: `Cette syntaxe permet de 'lier' une variable donnée à une autre appartenant à un autre élément.
L'élément ou composant s'attendant à recevoir une donnée préfixe la variable d'entrée du décorateur @Input() :
<code>import { Component, Input } from '@angular/core'; // Import Input
export class ItemDetailComponent {
  @Input() item = '';
}</code>
Ainsi à l'utilisation il suffit de procéder comme suit :
<code><app-item-detail [item]="currentItem"></app-item-detail>
<input [value]="currentItem"/></code>`
              }
            ]
          },
          {
            nom: "Source ↤ Vue",
            texte: "Le binding inverse corresponds à l'écoute d'un évenement : il s'agit de mettre à jour notre variable au déclenchement de l'évènement.",
            chapitres: [
              {
                nom: "(Event)",
                texte: `L'élément ou composant s'attendant à renvoyer une donnée préfixe la variable de sortie du décorateur @Output() :
<code>import { Component, Output } from '@angular/core'; // Import Output
export class ItemOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value); // Emission de la nouvelle valeur
  }
}</code>
La variable suivant le décorateur @Output() est 'toujours' un EventEmitter du type de la donnée émise (ci-dessus type string).
Le composant s'assure d'utiliser la méthode emit(value) afin de déclencher l'évènement.
Ainsi à le composant attendant ce déclenchement se prépare ainsi:
<code><app-item-output (newItemEvent)="addItem($event)"></app-item-output>
<button type="button" (click)="onSave()">Save</button></code>`
              }
            ]
          },
          {
            nom: "Source ⇆ Vue",
            texte: `Il est possible de combiner les principes précédents afin de gérer des liaisons dans les 2 sens :
<code><app-input-output
  [item]="currentItem"
  (deleteRequest)="crossOffItem($event)">
</app-input-output></code>
Toutefois il existe une syntaxe simplifiée.`,
            chapitres: [
              {
                nom: "[(ngModel)]",
                texte: `Lorsque l'on souhaite faire passer une donnée en entrée et que l'on s'attends à ce qu'elle soit mise à jour également, on parles alors de 'Two-Way Data binding'.
Pour que cela fonctionne, la propriété @Output() doit utiliser le modèle inputChange, où 'input' est le nom de la propriété @Input(). Par exemple, si la propriété @Input() est size, la propriété @Output() doit être sizeChange.
Ce composant :
<code>export class SizerComponent {
  @Input()  size: number = 10;
  @Output() sizeChange = new EventEmitter<number>();
  resize(delta: number) {
    this.size = delta;
    this.sizeChange.emit(this.size);
  }
}</code>
Peut être appelé ainsi :
<code><app-sizer [(size)]="fontSizePx"></app-sizer></code>
Ce comportement n'est pas sans rapeller celui du [(ngModel)] puisqu'il fonctionne de la même façon sur des éléments de formulaire :
<code><input name="titre" [(ngModel)]="title"></code>`
              }
            ]
          }
        ],
        texte: `Le data binding est la méthode par laquelle une donnée est associée à un élément du template.`,
        exemple: PIPE_EXEMPLE,
        children: [BindingComponent]
      }
    ],
    [
      Topic.PIPE,
      {
        route: 'Pipe',
        title: 'Pipes',
        icon: 'fas fa-code',
        chapitres: [
          {
            nom: "Définition", texte: `Les pipes permettent d’appliquer des transformations sur des données depuis le template HTML. <a href="https://angular.io/generated/live-examples/pipes/stackblitz.html" target="_blank">Live Exemple</a>

Un pipe est défini par :

 • une donnée en entrée (paramètre)
 • une donnée en sortie (valeur de retour)
 • une fonction de transformation (mapping)

Et si besoin, on peut envoyer un paramètre en plus de la valeur d'input.

Exemple:
<code><p> Date de réception : {{ receptionDate | date | uppercase }} </p></code>`
          },
          {
            nom: "Pipes Natifs", texte: `Angular fournit des pipes intégrés pour les transformations de données courantes, qui utilisent les informations locales pour formater les données.

 Les pipes suivants sont couramment utilisés :
<ul>
<li><a href="https://angular.io/api/common/DatePipe">DatePipe</a>: Formate une date donnée conformément à la Locale.</li>
<li><a href="https://angular.io/api/common/UpperCasePipe">UpperCasePipe</a>: Transforme un texte en lettres majuscules.</li>
<li><a href="https://angular.io/api/common/LowerCasePipe">LowerCasePipe</a>: Transforme un texte en lettres minuscules.</li>
<li><a href="https://angular.io/api/common/CurrencyPipe">CurrencyPipe</a>: Transforme un nombre en un string avec le symbole de la monnaie locale.</li>
<li><a href="https://angular.io/api/common/DecimalPipe">DecimalPipe</a>: Transforme un nombre en un string string de sa valeur décimale. (Peut être utilisé pour fixer le nombre de caractères attendus en sortie.)</li>
<li><a href="https://angular.io/api/common/PercentPipe">PercentPipe</a>: Transforme un nombre en un string de sa valeur en pourcentage.</li>
</ul>`
          },
          {
            nom: "Pipes Customisés",
            texte: "Il est possible de créer ses propres pipes afin de personnaliser (voire simplifier) l'affichage d'une donnée.",
            chapitres: [
              {
                nom: "Génération",
                texte: `La commande suivante (ou sa forme simplifiée), exécutée à la racine du projet (ou dans un sous-répertoire de 'src') suffit pour générer un pipe grace au CLI Angular:
                  <code> ng generate pipe {nomDuPipe} ( simplifiée : ng g p {nomDuPipe} ) </code>
Ce qui génere un résultat tel que celui-ci:
<code>import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomDuPipe'
})
export class NomDuPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}</code>`
              },
              {
                nom: "Mapping",
                texte: `La classe générée par le CLI implémente l'interface <a href="https://angular.io/api/core/PipeTransform" target="_blank">PipeTransform</a> d'où la présence de la méthode transform()
Le type de la valeur d'entrée (value) peut être adaptée au type attendu.
Les paramètres éventuellement passés (...args) peuvent aussi être typées différemment (par une variable unique ou plusieures par exemple)

Dans l'exemple suivant, TruncatePipe récupère une chaine de caractères en entrée et remplace par '...' ceux qui suivent le second espace.
<code>import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(value: string) {
    return value.split(' ').slice(0, 2).join(' ') + '...';
  }
}</code>
Exemple :
<code> {{ 'It was the best of times' | truncate }} //Sortie: It was...</code>

Cette fois il va accepter 2 arguments : le nombre d'espace à partir duquel la chaine sera tronquée, et le symbole qui représentera la troncature.
<code>import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number, symbol: string) {
    return value.split(' ').slice(0, length).join(' ') + symbol;
  }
}</code>
Exemple :
<code> {{ 'It was the best of times' | truncate:4:'(...)' }} //Sortie: It was the best(...)</code>`
              }
            ]
          }
        ],
        texte: `Les Pipes sont des filtres utilisables directement depuis la vue afin de transformer les valeurs lors du "binding".`,
        exemple: PIPE_EXEMPLE,
        children: [PipeComponent]
      }
    ],
    [
      Topic.DIRECTIVE,
      {
        route: 'Directive',
        title: 'Directives',
        icon: 'fas fa-compass-drafting',
        chapitres: [
          {
            nom: "Directives intégrées",
            texte: `Angular fournit des directives pour gérer les formulaires, les listes, les styles et l'affichage. Les composant sont un exemple de directive.`,
            chapitres: [
              {
                nom: "Directives d'attribut",
                texte: `Ces directives modifient l'apparence ou le comportement d'un élément, d'un composant ou même d'une autre directive.`,
                chapitres: [
                  {
                    nom: "[NgClass]",
                    texte: `NgClass permet de gérer plusieures classes à la fois (préférer le binding si il n'y en a qu'une). Elle fonctionne sur le principe d'association de variables booléennes et de noms de classes.
La syntaxe utilise généralement une expression ternaire de la forme 'condition ? classeSiOui : classeSiNon' :
<code><!-- Appliques ou non la classe "special" selon l'état de la propriété "isSpecial" -->
<div [ngClass]="isSpecial ? 'special' : ''">Div Spéciale</div></code>.
La directive peur aussi être utilisée avec une variable contenant toutes les associations comme c'est le cas pour la directive suivante.`,
                  },
                  {
                    nom: "[NgStyle]",
                    texte: `De la même façon que la directive NgClasse gère les classes, NgStyle permet la gestion de plusieurs attributs de styles à la fois. Afin de les modifier à l'aide d'une fonction et les appliquer à un élément il est possible de procéder comme tel :
Dans le script ts :
<code>currentStyles: Record<string, string> = \{\}; // Variable prête à recevoir les informations
setCurrentStyles() { // Associe une valeur d'attribut de style selon l'état de variables
  this.currentStyles = \{
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  \};
}</code>
Dans le template html :
<code><div [ngStyle]="currentStyles">
  Cette Div change de style à l'appel de la fonction setCurrentStyles().
</div></code>`,
                  },
                  {
                    nom: "[NgModel]",
                    texte: `NgModel permet d'afficher une donnée et de la mettre à jour quand l'utilisateur la modifie. Cette directive nécéssite l'import de FormsModule dans le module de base AppModule:
<code>...
import { FormsModule } from '@angular/forms';
...
@NgModule({
 ...
  imports: [
    ...,
    FormsModule,
    ...
  ],
...
})
export class AppModule { }</code>
Ainsi il est possible de l'utiliser sur tout élément de formulaire :
<code><label>{{currentItem.name}}:</label>
<input [(ngModel)]="currentItem.name" name="example-ngModel"></code>
Cette syntaxe est une version simpliflée de celle-ci :
<code><input [ngModel]="currentItem.name" (ngModelChange)="currentItem.name = $event" name="example-full-ngModel"><code>`,
                  }
                ]
              },
              {
                nom: "Directives structurelles",
                texte: `Ces directives modifient la structure du DOM en ajoutant ou supprimant des éléments. Attention toutefois : il ne peut y avoir qu'une seule directive structurelle par élément. Afin de combiner des directives, il faudra utiliser des éléments avec une directive contenus dans d'autres éléments avec une directive.`,
                chapitres: [
                  {
                    nom: "*ngIf",
                    texte: `ngIf ajoute (ou supprime) un élément selon une condition qui peut être représentée par une expression ou une variable.
Si une expression ou une variable booléenne est utilisée, l'élément ne sera affichée que si la condition retourne true. Pour tout autre type de variable, ngIf agit comme une protection contre les valeurs dites 'Falsy' (null, undefined, '', 0, ...) en ce sens que l'élément ne sera affiché que si il est différent de ces valeurs.

Exemple :
<code>// Affiche le composant app-active si isActive est true
<app-active *ngIf="isActive""></app-active>
// Affiche le componant app-item-detail si item n'est pas null ou undefined
<app-item-detail *ngIf="item" [item]="item"></app-item-detail> </code>`,
                  },
                  {
                    nom: "*ngFor",
                    texte: `ngFor répète l'élément pour chaque objet dans une liste ou tableau tout en définissant une variable utilisable pour chaque itération :
<code>// Répète une div par élements d'items et utilise la variable item pour afficher le name de chaque élément
<div *ngFor="let item of items">{{item.name}}</div>
// Répète le composant app-item-detail et lui transmet l'item pour chaque itération
<app-item-detail *ngFor="let item of items" [item]="item"></app-item-detail></code>`,
                  },
                  {
                    nom: "<ng-container>",
                    texte: `Il n'est pas possible de cumuler 2 directives structurelles sur un même élément. Il est donc nécessaire d'imbriquer des éléments avec une seule directive.
Cependant il n'est pas obligatoire de multiplier les élément du DOM afin de réaliser cette manoeuvre, Angular met à disposition balise ayant un comportement similaire, et donc capable de recevoir une directive, mais n'étant pas rendu à l'affichage : le ng-container
Une utilisation simple se fait ainsi :
<code><p>
  J'ai tourné au coin de la rue
  <ng-container *ngIf="hero"> // Balise non rendue
    , j'ai vu {{hero.name}}. Je l'ai salué // Texte affiché conditionnellement
  </ng-container>
  et ai continué ma route.
</p></code>
Et une imbrication :
<code><ng-container *ngFor="let item of items"> // Balise non rendue itérée
// Composant affiché si l'itération actuelle réponds a la condition
<app-item-active-detail *ngIf="item.active"  [item]="item"></app-item-active-detail>
</ng-container></code>`,
                  }
                ]
              }
            ]
          }
        ],
        texte: `Les directives sont des classes qui ajoutent un comportement supplémentaire aux éléments de l'application. Angular en fournis certaines pour gérer les formulaires, les listes, les styles et ce que les utilisateurs voient.`,
        exemple: DIRECTIVE_EXEMPLE,
        children: [DirectiveComponent]
      }
    ],
    [
      Topic.FORMS,
      {
        route: 'Forms',
        title: 'Formulaires',
        icon: 'fas fa-file-signature',
        chapitres: [
          {
            nom: "Modules",
            texte: `Il existe 2 façons de gérer les formulaires avec Angular, chacune de ces méthodes étant liées à un module:

  <a href="https://angular.io/guide/forms" target="_blank">Formulaire lié au Modèle</a> : FormsModule
  <a href="https://angular.io/guide/reactive-forms" target="_blank">Formulaire Réactif</a> : ReactiveFormsModule

Ces modules se distinguent essentiellement par la méthode de validation des entrées.`
          },{
            nom: "Form",
            texte: `Ces méthodes partagent toute fois un fonctionnement commun : celui de la balise \<form\>. Elle met a disposition les évènements Submit et Reset afin de redéfinir le comportement du formulaire au déclenchement de ceux-cis.
Il est également possible de l'identifier avec une variable de template afin d'y faire référence par la suite :
<code><form (submit)="onSubmit()" (reset)="resetForm()" #personForm>
  ...
  <input type="submit" value="Valider" [disabled]="!personForm.checkValidity()">
  <input type="reset" value="Réinitialiser">
</form></code>`
          },
          {
            nom: "Formulaire lié au Modèle",
            texte: `Étant la méthode la plus simple d'utilisation de formulaire, elle implique l'utilisation de la directive ngModel afin de lier chaque élément de formulaire à une variable. Il est possible d'utiliser une variable simple, ou lier tout ou partie des attributs d'un objet complexe :
<code> <form>
  <input type="text" name="nom" [(ngModel)]="personne.nom" required>
  <input type="number" name="age" [(ngModel)]="personne.age" min="18">
</form></code>
La validation des entrées et confiée aux éléments de formulaire comprenant la <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation" target="_blank">validation native HTML</a> et les <a href="https://angular.io/guide/form-validation#custom-validators" target="_blank">validateurs personnalisés</a>.`
          },
          {
            nom: "Formulaire Réactif",
            texte: `Les formulaires réactifs ont une syntaxe plus lourde mais offrent bien plus de contrôle sur les données grâce à une gestion plus poussée des validateurs. A l'instar du module précédent, celui ci nécessite la préparation du formulaire depuis le script.
En conséquence, les données du formulaires ne sont plus retournée en temps réel mais récupérés programmatiquement, généralement au moment du Submit et apres validation`,
            chapitres: [
              {
                nom: "FormControl",
                texte: ` L'objet <a href="https://angular.io/api/forms/FormControl" target="_blank">FormControl</a> suit les changements de la valeur ainsi que sa validité.
Il se construit avec la valeur par défaut et une liste optionnelle de validateurs :
<code>export class NameEditorComponent {
  name = new FormControl('', Validators.required);
}</code>
Et est ensuite associée grace a l'attribut [formControl] :
<code><label for="name">Name: </label>
<input id="name" type="text" [formControl]="name"></code>
La vérification de validité se fait donc sur le FormControl plutot que sur l'élément du DOM :
<code><div *ngIf="name.invalid && (name.dirty || name.touched)"
    class="alert alert-danger"></code>`
              },
              {
                nom: "FormGroup",
                texte: ` L'objet <a href="https://angular.io/api/forms/FormGroup" target="_blank">FormGroup</a> est un ensemble de FormControl permettant de plus aisément suivre l'état de l'ensemble.
Il se déclare ainsi :
<code>export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}</code>
L'association se fait directement sur la balise <form> et change l'appel des FormControl en utilisant leur nom :
<code><form [formGroup]="profileForm">
  <label for="first-name">First Name: </label>
  <input id="first-name" type="text" formControlName="firstName">
  <label for="last-name">Last Name: </label>
  <input id="last-name" type="text" formControlName="lastName">
</form></code>
La vérification de validité des éléments se fait toujours de la même façon, mais il est possible de faire une vérification sur l'état général du formulaire :
<code>// Le formulaire doit être complété pour activer le bouton
<button type="submit" [disabled]="!profileForm.valid">Valider</button>
Enfin, il est possible de récupérer un objet à la structure similaire à celle du groupe avec un appel simple :
<code>onSubmit() {
    if(this.profileForm.valid) { // Vérification de validité
        this.profile = this.profileForm.value // Récupération de l'objet convenable
    }
  }</code>`
              }
            ]
          }
        ],
        texte: `Le data binding est la méthode par laquelle une donnée est associée à un élément du template.`,
        exemple: FORMS_EXEMPLE,
        children: [FormsComponent]
      }
    ],
    [
      Topic.ROUTING,
      {
        route: 'Routing',
        title: "Routing",
        texte: `<p>Étant au sein d'une application single-page, Angular simule la navigation grace au Router. Il se charge d'afficher ou de masquer des composants plutôt que de recharger une nouvelle page et ce en interprétant l'URL en tant qu'instruction.</p>`,
        icon: 'fa-solid fa-map-location',
        chapitres: [
          {
            nom: 'Routage',
            texte: `Lorsque que l'option de routage est validée lors de la création de projet, 3 éléments deviennent indispensable pour la création et la gestion des routes :`,
            chapitres: [
              {
                nom: 'app-routing.module.ts',
                texte: `Ce fichier est généré par l'option de routage et présente la structure nécessaire au routage :
<code>...
import { Routes, RouterModule } from '@angular/router'; // Import du Router et du RouterModule

const routes: Routes = [  // Tableau de définition des routes
  { path: '', component: HomeComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard récupérant toutes les URL non-répertoriées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ajout des routes au module
  exports: [RouterModule]
})
export class AppRoutingModule { }</code>
L'ordre des itinéraires est important car le Router utilise une stratégie de premier match gagnant lors de la mise en correspondance des routes, de sorte que les plus spécifiques doivent être placés au-dessus des routes générales.
Répertoriez d'abord les routes avec un chemin statique, suivi d'une route de chemin vide, qui correspond à la route par défaut. Elle vient en dernier car elle correspond à chaque URL que le Router sélectionne si aucune autre route ne correspond en premier.

Une fois configuré, veillez à ce que la classe AppRoutingModule fasse partie du module principal AppModule :
<code>...
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ajout de l'AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }</code>`
              },
              {
                nom: '<router-outlet></router-outlet>',
                texte: `Cette balise agit comme un espace réservé qu'Angular remplit dynamiquement en fonction de l'état actuel du routeur. Il s'utilise ainsi :
<code> Route : { path: 'exemple', component: ExempleComponent } // http://host/exemple
<html>
    <head>
    ...
    </head>
    <body>
        ...
        <app-root>
            ...
            <router-outlet></router-outlet> // Emplacement réservé
            <app-exemple> // Le composant est inséré à la suite
              ...
            </app-exemple>
            ...
        </app-root>
        ...
    </body>
</html>
</code>
Pour plus d'options de personalisation de la balise, voir la <a href="https://angular.io/api/router/RouterOutlet" target="_blank">Documentation Officielle</a> `
              },
              {
                nom: 'routerLink',
                texte: `Lorsqu'il est appliqué à un élément dans un template, routerLink fait de ce dernier un lien qui initie la navigation vers une route. La navigation ouvre un ou plusieurs composants routés à un ou plusieurs emplacements de la page marqués de la balise <router-outlet>.
Syntaxe :
<code><button routerLink="/exemple">Lien vers Exemple</button>
<a [routerLink]="['/exemple']">Lien vers Exemple</a></code>
La route étant segmentée par les / :
♦ Si le premier segment commence par /, le routeur recherche la route à partir de la racine de l'application.
♦ Si le premier segment commence par ./, ou ne commence pas par une barre oblique, le routeur regarde dans les enfants de la route actuellement activée.
♦ Si le premier segment commence par ../, le routeur monte d'un niveau dans l'arborescence des routes.`
              }
            ]
          },
          {
            nom: 'Routes',
            texte: `Une route est un objet qui définit un appel unique à une page ou un composant. Un ensemble de routes est collecté dans le tableau des Routes pour définir la configuration du Router.
Rappel :
<code>const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: PageNotFoundComponent }
];</code>
Cependant cet objet possède plus d'attributs dont la liste est disponible dans la <a href="https://angular.io/api/router/Route" target="_blank">Documentation Officielle</a>`,
            chapitres: [
              {
                nom: 'Variables d\'URL',
                texte: `Il est possible de transmettre et de récupérer des informations via l'URL en configurant le path de la route afin d'accepter des variables et ce en prefixant le nom de la variable avec ':'.
Exemple :
<code>{ path: 'exemple/:sujet', component: ExempleComponent } // Variable 'sujet'</code>
Le lien vers cette route peut ainsi contenir une valeur prédéfinie pour la variable sujet ou également utiliser une variable :
<code><button routerLink="/exemple/routing">Lien vers l'exemple routing</button>
<a [routerLink]="['/exemple',sujet]">Lien vers Exemple avec un sujet variable</a></code>
Enfin, pour récupérer la valeur de la variable dans le composant appelé, on procédera comme suit :
<code>import {Component} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({...})
export class LibraryComponent {
  sujet: string
  constructor(private route: ActivatedRoute) { // ActivatedRoute contiens les informations relatives à la route ayant appelé le composant
    this.route.paramMap.subscribe(params => { // Met à jour la valeur à chaque changement de route si ce composant reste actif
      this.sujet = params['sujet'];
    });
    // OU \\
    this.sujet = route.snapshot.paramMap.get('sujet') // Récupère la valeur au moment de l'appel de la méthode
  }
}</code>`
              }
            ]
          }
        ],
        exemple: ROUTING_EXEMPLE,
        children: [RoutingComponent]
      }
    ],
    [
      Topic.HTTP,
      {
        route: 'Http',
        title: "Observables / HTTP",
        texte: `<p>Un objet observable suit les changements d'état d'une donnée grâce à une interface permettant de gérer efficacement des traitements asynchrones.
Ceci conviens particulièrement pour le traitement d'appels HTTP. Le module HttpClient utilise ce type d'objet afin de retourner le résultat des appels.</p>
<p>Le BehaviorSubject est un type d'observable contenant une valeur par défaut mise à jour avec les évènements. Il se comporte de la même façon que tout autre observable, mais doit être initialisé avec une valeur de départ accessible sous le nom 'value'.</p>
<p>Afin d'exploiter un observable, il faut y 'souscrire' : définir les comportements voulus lors du déclenchement des différentes notifications de changement d'état.</p>`,
        icon: 'fa-solid fa-server',
        chapitres: [
          {
            nom: 'Observables',
            texte: `Un objet de type observable suit l'évolution d'une données ainsi que les évènements associés à cette évolution.
Pour se faire il renvoie 3 types de notifications : `,
            chapitres: [
              {
                nom: 'next',
                texte: `Cette notification transmet la nouvelle valeur d'une donnée. Dans cette situation, on sait que le traitement attendu sur la donnée a été réalisé sans encombres.
C'est le cas lorsqu'un EventEmitter (implémente l'interface observable) émet une nouvelle valeur :
<code>this.childSizeChange.emit(this.childSize)
// Agit ainsi : observable.next(value)</code>`
              },
              {
                nom: 'error',
                texte: `Cette notification indique qu'un traitement attendu n'a pas pu être exécuté. Généralement cette notification retourne en valeur la raison de l'échec de l'exécution.
Un EventEmitter notifiera de cette situation ainsi :
<code>this.childSizeChange.error("Size too high")
// Agit ainsi : observable.error(cause)</code>`
              },
              {
                nom: 'complete',
                texte: `Un observable notifiant 'complete' indique qu'il ne retournera plus de nouvelles valeurs, l'ensemble ayant déjà été émit via 'next'. Attention cependant : une précédente émission délayée peut tout de même être récupérée apres une notification 'complete'.
Un EventEmitter ayant rempli sa fonction le signalera comme suit :
<code>this.childSizeChange.complete()
// Agit ainsi : observable.complete() et ne retourne aucune valeur</code>`
              }
            ]
          },
          {
            nom: 'Souscription',
            texte: `Afin de réagir aux différentes notifications d'un observable on doit y 'souscrire', c'est à dire définir le comportement attendu pour une ou plusieurs notifications.`,
            chapitres: [
              {
                nom: 'Lambda',
                texte: `Une souscription effectuée via une fonction lambda n'est exécutée que sur réception d'une notification 'next'.
On y décrit un traitement qui sera répété autant de fois que la notification 'next' sera reçue :
<code>this.childSizeChange.subscribe((size) => console.log(size))
this.childSizeChange.next(1);
this.childSizeChange.next(2);
this.childSizeChange.next(3);
this.childSizeChange.next(1);
// Produit le résultat suivant dans la console :
// 1
// 2
// 3
// 1</code>`
              },
              {
                nom: 'Observer',
                texte: `Afin de traiter plusieurs cas lors d'une souscription, il faut utiliser un objet implémentant l'interface Observer.
Cet objet doit donc être structuré comme tel :
<code>this.childSizeChange.subscribe({
    next: (size: number) => console.log(size), // obligatoire
    error: (cause: any) => console.log(cause), // optionnel
    complete: () => console.log("End of execution") // optionnel
  })</code>`
              }
            ]
          },
          {
            nom: 'HttpClient',
            texte: `Le client Http fournis des méthodes de création de requêtes retournant des Observables pouvant être typées selon les besoins.
(Note importante : il faut souscrire à l'observable retourné par la méthode afin de lancer effectivement la requête).
Ce client viens avec un module devant être importé dans le fichier app.module.ts :
<code>...
import { HttpClientModule } from '@angular/common/http';
...
@NgModule({
  imports: [
    ...
    HttpClientModule,
    ...
  ],
  declarations: [...],
  bootstrap: [...]
})
export class AppModule {}</code>
Les appels étant généralement réutilisés et donc n'étant pas exclusif à un composant, il est utilisé dans des services :
<code>import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  token: string = 'jwToken'
  optionalHeaders = new HttpHeaders({
    'Authorization':\`Bearer \${this.token}\`
  })

  constructor(private http: HttpClient) { }

  all(): Observable<any>{
    // Appel non typé
    return this.http.get('url')
  }

  get(id: number): Observable<Post> {
    // Appel typé : retourne un objet
    return this.http.get<Post>(\`url/\${id}\`)
  }

  post(body: any): Observable<number> {
    // Appel typé mais transformant l'objet via map avant le retour
    return this.http.post<Post>('url',body).pipe(map(post => post.id))
  }

  update(body: any): Observable<Post> {
    // Appel typé et incluant Headers
    return this.http.put<Post>('url',body, {headers : this.optionalHeaders})
  }

  delete(id: number): Observable<never> {
    // Appel typé never : indique que l'appel ne retourne jamais de valeur
    return this.http.delete<never>(\`url/\${id}\`)
  }
}
</code>
Rappel : Il faut souscrire à l'observable afin de 'lancer' effectivement la requête vers l'URL.`,
          }
        ],
        exemple: OBSERVABLE_EXEMPLE,
        children: [ObservablesComponent]
      }
    ]
  ]);

  static getValues(): Info[] {
    return Array.from(this.topicsInfos.values())
  }

  static getChildren(topic: Topic): Routes {
    return this.topicsInfos.get(topic)?.children.map(child => {
      return {path: '', component: child, children: topic === Topic.ROUTING ? routes_exercice : undefined}
    }) || [];
  }

  static getInfo(topic: Topic): Info | undefined {
    return this.topicsInfos.get(topic)
  }

  static has(topic: Topic): boolean {
    return this.topicsInfos.has(topic);
  }

  static getTitle(topic: Topic) {
    return this.getInfo(topic)?.title || 'Unknown Topic'
  }
}
