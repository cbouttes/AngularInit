import {Component, Input, OnInit} from '@angular/core';
import {Chapitre} from "../../models/cours";

@Component({
  selector: 'app-chapitre-menu',
  templateUrl: './chapitre-menu.component.html',
  styleUrls: ['./chapitre-menu.component.css']
})
export class ChapitreMenuComponent implements OnInit {

  @Input()
  chapitres: Chapitre[] = [];

  @Input()
  container!: HTMLElement

  constructor() {
  }

  ngOnInit(): void {
  }

  scrollTo(chapter: string) {
    const chapterDiv = this.container.querySelector('#' + chapter.replace(' ', ''));
    if (chapterDiv) {
      chapterDiv.scrollIntoView({behavior: 'smooth'})
    }
  }

  open(event: MouseEvent) {
    const token = 'active'
    const classes = ((event.target || event.currentTarget) as Element).classList;
    classes.contains(token) ? classes.remove(token): classes.add(token);
  }
}
