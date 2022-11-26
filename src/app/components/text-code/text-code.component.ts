import {Component, Input, OnInit} from '@angular/core';

enum TextType {
  PLAIN, CODE
}

interface ChapterText {
  type: TextType,
  text: string
}

@Component({
  selector: 'app-text-code',
  templateUrl: './text-code.component.html',
  styleUrls: ['./text-code.component.css']
})
export class TextCodeComponent implements OnInit {

  @Input()
  text: string = "";
  types = TextType;
  textCode: ChapterText[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.textCode = this.parseText();
  }

  parseText(): ChapterText[] {
    const parsed: ChapterText[] = []
    const s = this.text.split("<code>")
    parsed.push({type: TextType.PLAIN, text: s[0]});
    s.forEach((splitted, index) => {
      if (!index) return;
      const code = splitted.split("</code>");
      parsed.push({type: TextType.CODE, text: code[0]})
      if (code[1]) {
        parsed.push({type: TextType.PLAIN, text: code[1]});
      }
    })
    return parsed;
  }
}
