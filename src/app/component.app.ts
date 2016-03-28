import {Component} from 'angular2/core';
import {FileData} from "./data.file";
import {PreviewComponent} from "./component.preview";
import {SaveModal} from "./component.modal";
import {Converter} from "./utils.converter";
import {FileSaveData} from "./data.file";
import {ImageFormatEnum} from "./data.image-format-type";
import {SaveModalMulti} from "./component.modal-multi";

"use strict";

const remote = require('remote');
const dialog = remote.require('dialog');
const browserWindow = remote.require('browser-window');
const fs = require('fs');

@Component({
  selector: 'my-app',
  templateUrl: "app-html/component.app.html",
  styles: [`
    .my-card-holder {
      padding : 70px 0 70px;
    }
  `],
  directives: [PreviewComponent, SaveModal, SaveModalMulti]
})
export class AppComponent {
  private files:FileData[];
  private selectedFile:string;

  constructor() {
    // -------------------------------
    // ドラッグ&ドロップの動作を阻止する
    // -------------------------------
    document.addEventListener("dragover", (event:DragEvent)=> {
      this.handleDragOver(event);
    });
    document.addEventListener("drop", (event:DragEvent)=> {
      this.handleDrop(event);
    });

  }

  private handleDragOver(event:DragEvent) {
    event.preventDefault();
  }

  private handleDrop(event:DragEvent) {
    event.preventDefault();

    const files = <FileList> event.dataTransfer.files;
    const filenames:string[] = [];
    for (let i = 0; i < files.length; i++) {
      let file = <File>files[i]
      filenames.push(file["path"]);
    }
    this.updateFiles(<string[]> filenames);
  }

  /**
   * 読み込みするためのファイルを開く
   */
  private loadFiles():void {
    var win = browserWindow.getFocusedWindow();

    dialog.showOpenDialog(
      win,
      // どんなダイアログを出すかを指定するプロパティ
      {
        properties: ["openFile", "multiSelections"],
        filters: [
          {
            name: "Image Files",
            extensions: ["png", "gif", "jpeg", "jpg", "svg", "webp"]
          }
        ]
      },
      // [ファイル選択]ダイアログが閉じられた後のコールバック関数
      (filenames:string[]) => {
        this.updateFiles(filenames);
      });

    // バインディングのトリガー・・・
    setInterval(()=> {
      this.files;
    }, 1000);
  }

  private updateFiles(filenames:string[]) {
    let files = [];
    for (let i = 0; i < filenames.length; i++) {
      files.push(new FileData(filenames[i]));
    }

    this.files = files;
  }

  private saveFiles():void {
    $("#myModalMulti").modal();
  }

  private openSaveDialog(event):void {
    this.selectedFile = event;
    $("#myModal").modal();
  }

}

