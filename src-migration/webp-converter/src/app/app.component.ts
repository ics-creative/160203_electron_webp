import {Component} from '@angular/core';
import {FileData} from './data.file';


// import {electron} from 'electron';
// import * as electron from 'electron';
// import * as fs from 'fs';

// const electron = require('electron');
// const app = electron.app;
// const remote = require('remote');
// const dialog = remote.require('dialog');
// const browserWindow = electron.BrowserWindow;
// const fs = require('fs');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private files: FileData[];
  private selectedFile: string;

  constructor() {
    // -------------------------------
    // ドラッグ&ドロップの動作を阻止する
    // -------------------------------
    document.addEventListener('dragover', (event: DragEvent) => {
      this._handleDragOver(event);
    });
    document.addEventListener('drop', (event: DragEvent) => {
      this._handleDrop(event);
    });


  }

  private _handleDragOver(event: DragEvent) {
    event.preventDefault();
  }


  private _handleDrop(event: DragEvent) {
    event.preventDefault();

    const files = <FileList> event.dataTransfer.files;
    const filenames: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = <File>files[i];
      filenames.push(file['path']);
    }
    this.updateFiles(<string[]> filenames);
  }




  /**
   * 読み込みするためのファイルを開きます。
   */
  private loadFiles(): void {

    console.log(electron);
    let win;
    // const win = electron.BrowserWindow.getFocusedWindow();
    console.log(remote)
    // var BrowserWindow = remote.require('browser-window');
    var dialog = electron.remote;


    // console.log(BrowserWindow)

    console.log(dialog)

    dialog.showOpenDialog(
      win,
      // どんなダイアログを出すかを指定するプロパティ
      {
        properties: ['openFile', 'multiSelections'],
        filters: [
          {
            name: 'Image Files',
            extensions: ['png', 'gif', 'jpeg', 'jpg', 'svg', 'webp']
          }
        ]
      },
      // [ファイル選択]ダイアログが閉じられた後のコールバック関数
      (filenames: string[]) => {
        this.updateFiles(filenames);
      });

    // バインディングのトリガー・・・
    setInterval(() => {
      this.files;
    }, 1000);
  }

  /**
   * ファイルのリストを更新します。
   * @param filenames
   */
  private updateFiles(filenames: string[]) {
    const files = [];
    for (let i = 0; i < filenames.length; i++) {
      files.push(new FileData(filenames[i]));
    }

    this.files = files;
  }

  private saveFiles(): void {
    jQuery('#myModalMulti').modal();
  }

  private openSaveDialog(event): void {
    this.selectedFile = event;
    jQuery('#myModal').modal();
  }
}
