import { Pipe, PipeTransform } from '@angular/core';

declare function style_html(str: string): string

@Pipe({
  name: 'style'
})
export class StylePipe implements PipeTransform {

  transform(value: string): string {
    return (/\/<\/?[a-z][\s\S]*>\/i/.test(value)) ? style_html(value) : value;
  }

}


