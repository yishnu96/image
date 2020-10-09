import { Component } from '@angular/core';
import mergeImages from 'merge-images';
import ImageEditor from 'tui-image-editor';
import FileSaver from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  image = '../assets/img/questionpaper.png';

  currect = '../assets/img/currectt.png';
  wrong = '../assets/img/wrongg.png';

  merge (number : number){
    this.image = '../assets/img/questionpaper.png';
    // console.log(this.image);
    switch(number){
      case 0: {
        // mergeImages([this.image, this.wrong ])
        // .then(b64 => this.image = b64);
        // break;
        mergeImages([
          { src: this.image, x : 0, y : 0 },
          { src: this.wrong, x : 600, y: 75 }
        ])
        .then(b64 => this.image = b64);
        break;
      }

      case 1: {
        mergeImages([
          { src: this.image, x : 0, y : 0 },
          { src: this.currect, x : 600, y: 75 }
        ])
        .then(b64 => this.image = b64);
        break;
      }
    }
  }


}
