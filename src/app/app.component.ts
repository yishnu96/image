import { Component, OnInit } from '@angular/core';
import  ImageEditor from 'tui-image-editor';
import FileSaver from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  image = '../assets/img/questionpaper.png';

  constructor() {
  }

  public ngOnInit() {
    const instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
      cssMaxWidth: 700,
      cssMaxHeight: 500,
      selectionStyle: {
          cornerSize: 20,
          rotatingPointOffset: 70
      }
  });
  }


// Load image
// instance.loadImageFromURL('img/sampleImage.jpg', 'My sample image')

}


