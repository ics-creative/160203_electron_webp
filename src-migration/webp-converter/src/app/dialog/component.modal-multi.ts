import {Converter} from '../utils/utils.converter';
import {FileData, FileSaveData} from '../data/data.file';
import {ImageFormatSetting} from '../data/data.image-format-type';
import {ImageFormatComponent} from '../ui/component.image-format';
import {Component, Input} from '@angular/core';

// const remote = require('remote');
// const dialog = remote.require('dialog');
// const browserWindow = remote.require('browser-window');
// const fs = require('fs');

@Component({
  selector: 'app-modal-save-multi',
  template: `    
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="myModalLabel">書き出し形式</h4>
        </div>
        <div class="modal-body">
          <app-setting-image-format [setting]="setting"></app-setting-image-format>
          <app-setting-image-format [setting]="setting"></app-setting-image-format>
          <progress class="progress" value="{{progress}}" max="100">{{progress}}%</progress>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
          <button type="button" class="btn btn-primary" (click)="showSaveDialog()" [disabled]="setting.format == null">
            保存先を選択する
          </button>
        </div>
      </div>
    </div>
  `
})


/**
 * 画像の書き出し設定(複数ファイル)を行うモダールコンポーネントです。
 */
export class SaveModalMultiComponent {
  @Input() private files: FileData[];
  private setting: ImageFormatSetting = new ImageFormatSetting();
  private progress: number;

  constructor() {

  }

  private showSaveDialog() {

    // var win = browserWindow.getFocusedWindow();
    //
    // dialog.showOpenDialog(
    //   win,
    //   // どんなダイアログを出すかを指定するプロパティ
    //   {
    //     properties: ["openDirectory"]
    //   },
    //   // [ファイル選択]ダイアログが閉じられた後のコールバック関数
    //   (dir:string) => {
    //     if (dir) {
    //       this.saveFile(dir);
    //     }
    //   });
  }

  private saveFile(dir: string): void {
    this.progress = 0;

    // let taskFiles:FileSaveData[] = [];
    // for (let i = 0; i < this.files.length; i++) {
    //   let fileInput = this.files[i];
    //   let urlOutput = dir + "/" + fileInput.fileNameWithoutExtension + "." + this.setting.getExtention();
    //   let fileOutput = new FileData(urlOutput);
    //
    //   let file = new FileSaveData(fileInput, fileOutput);
    //   taskFiles.push(file);
    // }
    //
    // let converter = new Converter(taskFiles);
    // converter.onProgress = (progress:number) => {
    //   this.progress = Math.round(progress * 100);
    // };
    // converter.onComplete = () => {
    //   this.progress = 1.0 * 100;
    //   alert("保存しました。");
    //
    //   $("#myModalMulti").modal("hide");
    // };
    // converter.convert(this.setting);
  }
}