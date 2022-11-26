import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MiaComponent} from "./components/mia/mia.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {InfoComponent} from './components/modal/info/info.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CyberTextComponent} from './components/cyber-text/cyber-text.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MiaComponent,
    InfoComponent,
    CyberTextComponent,
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
    InstallComponent
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
    NgxMatDatetimePickerModule
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
