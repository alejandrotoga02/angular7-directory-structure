import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'YoutubeID'
})
export class YoutubeIDPipe implements PipeTransform {
  constructor() { }
  transform(url: any): string {

    let ID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  }
}
