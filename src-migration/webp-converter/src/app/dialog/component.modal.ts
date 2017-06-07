import {Component, Inject, Input} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

import {ImageFormatSetting} from '../data/data.image-format-type';
import {FileData, FileSaveData} from '../data/data.file';
import {Converter} from '../utils/utils.converter';

@Component({
  selector: 'app-modal-save',
  template: `
    <div class="modal-dialog">
      <h2 md-dialog-title>書き出し形式</h2>
      <md-dialog-content>
        <img src="{{selectedFile}}" class="img-fluid"/>
        <app-setting-image-format [setting]="setting"></app-setting-image-format>
      </md-dialog-content>
      <md-dialog-actions>
        <button md-button
                md-dialog-close>
          閉じる
        </button>
        <button md-button
                (click)="showSaveDialog()"
                [disabled]="setting.format == null">
          保存する
        </button>

      </md-dialog-actions>
    </div>
  `
})

/**
 * 画像の書き出し設定を行うモダールコンポーネントです。
 */
export class SaveModalComponent {
  @Input() private selectedFile: string;
  private setting: ImageFormatSetting = new ImageFormatSetting();

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              private dialogRef: MdDialogRef<any>) {
    this.selectedFile = data.selectedFile;
  }

  private showSaveDialog() {
    const win    = electron.remote.BrowserWindow.getFocusedWindow();
    const file   = new FileData(this.selectedFile);
    const urlNew = file.directory + '/' + file.fileNameWithoutExtension + '.' + this.setting.getExtention();

    electron.remote.dialog.showSaveDialog(
      win,
      // どんなダイアログを出すかを指定するプロパティ
      {
        title      : 'ファイルの保存先を選択ください',
        defaultPath: urlNew
      },
      // [ファイル選択]ダイアログが閉じられた後のコールバック関数
      (filenames: string) => {
        if (filenames && filenames.length > 0) {
          this.saveFile(filenames);
        }
      });
  }

  private saveFile(saveFileUrl: string): void {

    const file = new FileSaveData(
      new FileData(this.selectedFile),
      new FileData(saveFileUrl));

    const converter = new Converter([file]);

    converter.onProgress = (progress: number) => {
      console.log(progress);
    };
    converter.onComplete = () => {
      alert('保存しました。');

      this.dialogRef.close();
    };
    converter.convert(this.setting);
  }
}
