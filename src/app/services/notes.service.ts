import { Injectable } from '@angular/core';
import {Topic} from "../statics/topic";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Map<Topic,string>

  constructor() {
    const localNotes = localStorage.getItem('NOTES');
    this.notes = localNotes ? new Map(JSON.parse(localNotes)) : new Map<Topic,string>();
  }

  saveNote(topic: Topic, notes: string) {
    this.notes.set(topic,notes);
    localStorage.setItem('NOTES',JSON.stringify(Array.from(this.notes.entries())));
  }

  getNote(topic: Topic):string {
    return this.notes.get(topic) || '';
  }
}
