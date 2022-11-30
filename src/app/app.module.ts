import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from "@angular/material/dialog";
import {HomeComponent} from './pages/home/home.component';
import {PipeComponent} from './pages/exercice/topics/pipe/pipe.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SideComponent} from './components/side/side.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions} from "ngx-highlightjs";
import {SafePipe} from "./pipes/safe-pipe.pipe";
import {PortalModule} from "@angular/cdk/portal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";
import {DatePipe} from "@angular/common";
import {CoursComponent} from './components/modal/cours/cours.component';
import {ChapitreMenuComponent} from './components/chapitre-menu/chapitre-menu.component';
import {ExerciceComponent} from "./pages/exercice/exercice.component";
import {StylePipe} from './pipes/style.pipe';
import { TextCodeComponent } from './components/text-code/text-code.component';
import { InstallComponent } from './pages/exercice/topics/install/install.component';
import { HighlightsDirective } from './directives/highlights.directive';
import { BindingComponent } from './pages/exercice/topics/binding/binding.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { BindingChildComponent } from './pages/exercice/topics/binding/binding-child/binding-child.component';
import { ShematicsComponent } from './pages/exercice/topics/shematics/shematics.component';
import { StructureComponent } from './pages/exercice/topics/structure/structure.component';
import { DirectiveComponent } from './pages/exercice/topics/directive/directive.component';
import { FormsComponent } from './pages/exercice/topics/forms/forms.component';
import { RoutingComponent } from './pages/exercice/topics/routing/routing.component';
import { NotesComponent } from './components/modal/notes/notes.component';
import {NgxColorsModule} from "ngx-colors";
import { PresentationPipe } from './pipes/presentation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceComponent,
    HomeComponent,
    PipeComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    SafePipe,
    CoursComponent,
    ChapitreMenuComponent,
    StylePipe,
    TextCodeComponent,
    InstallComponent,
    HighlightsDirective,
    BindingComponent,
    BindingChildComponent,
    ShematicsComponent,
    StructureComponent,
    DirectiveComponent,
    FormsComponent,
    RoutingComponent,
    NotesComponent,
    PresentationPipe
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    HighlightModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxMatNativeDateModule,
    NgxMatDatetimePickerModule,
    MatProgressBarModule,
    NgxColorsModule
  ],
  providers: [
    DatePipe,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
      },
    },
  ],
  bootstrap: [AppComponent, SideComponent, HeaderComponent]
})
export class AppModule {
}
