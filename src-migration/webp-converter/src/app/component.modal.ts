import {Component, Inject, Input} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

import {ImageFormatSetting} from './data.image-format-type';
import {FileData, FileSaveData} from './data.file';
import {Converter} from './utils.converter';


// const dialog        = remote.require('dialog');
// const browserWindow = remote.require('browser-window');
// const fs            = require('fs');


@Component({
  selector: 'app-modal-save',
  template: `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="myModalLabel">書き出し形式</h4>
        </div>
        <div class="modal-body">
          <img src="{{selectedFile}}" class="img-fluid"/>

          <app-setting-image-format [setting]="setting"></app-setting-image-format>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
          <button type="button" class="btn btn-primary" (click)="showSaveDialog()" [disabled]="setting.format == null">
            保存する
          </button>
        </div>
      </div>
    </div>
  `
})

/**
 * 画像の書き出し設定を行うモダールコンポーネントです。
 */
export class SaveModalComponent {
  @Input() private selectedFile: string;
  private setting: ImageFormatSetting = new ImageFormatSetting();

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    this.selectedFile = data.selectedFile;
  }
  
  private showSaveDialog() {

    console.log('showSaveDialog');
    console.log(electron.remote);
    console.log(electron.remote.BrowserWindow);
    console.log('showSaveDialog');
    console.log(electron.remote.dialog.showSaveDialog);

    const win2    = remote.getCurrentWindow();
    const options = {
      title  : 'タイトル',
      filters: [
        {name: 'JPEG File', extensions: ['jpg', 'jpeg']},
        {name: 'All Files', extensions: ['*']}
      ]
    };
    remote.dialog.showSaveDialog(win2, options);

    const win    = electron.remote.BrowserWindow.getFocusedWindow();
    const file   = new FileData(this.selectedFile);
    const urlNew = file.directory + '/' + file.fileNameWithoutExtension + '.' + this.setting.getExtention();


    //
    // electron.remote.dialog.showSaveDialog(
    //   win,
    //   // どんなダイアログを出すかを指定するプロパティ
    //   {
    //     title      : 'ファイルの保存先を選択ください',
    //     defaultPath: urlNew
    //   },
    //   // [ファイル選択]ダイアログが閉じられた後のコールバック関数
    //   (filenames: string) => {
    //     console.log('[ファイル選択]ダイアログが閉じられた後のコールバック関数');
    //
    //     console.log(filenames);
    //     if (filenames && filenames.length > 0) {
    //       this.saveFile(filenames);
    //     }
    //   });
    console.log('showSaveDialog - executed');
  }

  private saveFile(saveFileUrl: string): void {

    console.log(saveFileUrl);
    const file = new FileSaveData(
      new FileData(this.selectedFile),
      new FileData(saveFileUrl));

    const converter = new Converter([file]);

    converter.onProgress = (progress: number) => {
      console.log(progress);
    };
    converter.onComplete = () => {
      alert('保存しました。');

      // $('#myModal').modal('hide');
    };
    converter.convert(this.setting);

  }
}
