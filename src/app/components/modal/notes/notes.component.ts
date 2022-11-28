import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Topic} from "../../../statics/topic";
import {NotesService} from "../../../services/notes.service";
import {Infos} from "../../../statics/infos";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  topic: Topic
  title: string;
  notes: string;

  autoSaveTimer?: number;

  constructor(@Inject(MAT_DIALOG_DATA) private data: Topic, private service: NotesService) {
    this.topic = data;
    this.title = Infos.getTitle(this.topic)
    this.notes = service.getNote(this.topic);
  }

  ngOnInit(): void {
  }

  saveNotes(){
    this.service.saveNote(this.topic, this.notes);
  }

  autoSave() {
    if(this.autoSaveTimer) {
      clearTimeout(this.autoSaveTimer);
      this.autoSaveTimer = undefined
    }
    this.autoSaveTimer = setTimeout(this.saveNotes,5000);
  }
}
