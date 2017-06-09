import {Converter} from '../utils/utils.converter';
import {FileData, FileSaveData} from '../data/data.file';
import {ImageFormatSetting} from '../data/data.image-format-type';
import {Component, Inject, Input} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-save-multi-dialog',
  template: `
    <div>
      <h2 md-dialog-title>書き出し形式</h2>
      <md-dialog-content>
        <app-setting-image-format [setting]="setting"></app-setting-image-format>

        <div [hidden]="hidden">
          <p>書き出し中</p>
          <md-progress-bar mode="determinate"
                           [value]="progress">
          </md-progress-bar>
        </div>
      </md-dialog-content>

      <md-dialog-actions>
        <button md-button
                md-dialog-close
                [disabled]="!hidden">
          閉じる
        </button>
        <button md-button
                (click)="showSaveDialog()"
                [disabled]="setting.format == null || !hidden">
          保存先を選択する
        </button>
      </md-dialog-actions>
    </div>
  `,
  styles  : [`
    md-dialog-content {
      padding: 24px 24px;
    }
  `]
})

/**
 * 画像の書き出し設定(複数ファイル)を行うモダールコンポーネントです。
 */
export class SaveMultiDialogComponent {
  @Input() private files: FileData[];
  private setting: ImageFormatSetting = new ImageFormatSetting();
  private progress: number;
  private hidden                      = true;

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              private dialogRef: MdDialogRef<any>) {

    this.files = data.files;
  }

  private showSaveDialog() {

    // var win = browserWindow.getFocusedWindow();
    //
    electron.remote.dialog.showOpenDialog(
      null,
      // どんなダイアログを出すかを指定するプロパティ
      {
        properties: ['openDirectory']
      },
      // [ファイル選択]ダイアログが閉じられた後のコールバック関数
      (dir: string) => {
        if (dir) {
          this.saveFile(dir);
        }
      });
  }

  private saveFile(dir: string): void {
    this.progress = 0;
    this.hidden   = false;

    // UI Lock
    document.querySelector('html').style.pointerEvents = 'none';

    const taskFiles: FileSaveData[] = [];
    for (let i = 0; i < this.files.length; i++) {
      const fileInput  = this.files[i];
      const urlOutput  = dir + '/' + fileInput.fileNameWithoutExtension + '.' + this.setting.getExtention();
      const fileOutput = new FileData(urlOutput);

      const file = new FileSaveData(fileInput, fileOutput);
      taskFiles.push(file);
    }

    const converter = new Converter(taskFiles);

    converter.onProgress = (progress: number) => {
      this.progress = progress * 100;
    };
    converter.convert(this.setting).then(() => {
      this.progress = 1.0 * 100;

      setTimeout(() => {
        this.hidden = true;

        alert('保存しました。');
        this.dialogRef.close();

        // UI Lock
        document.querySelector('html').style.pointerEvents = null;
      }, 500);

    });
  }
}
