import {Component} from 'angular2/core';
import {Converter} from './utils.converter';
import {FileData, FileSaveData} from './data.file';
import {ImageFormatSetting} from './data.image-format-type';
import {ImageFormatComponent} from './component.image-format';


const remote = require('remote');
const dialog = remote.require('dialog');
const browserWindow = remote.require('browser-window');
const fs = require('fs');

@Component({
  selector: "modal-save",
  template: `
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">書き出し形式</h4>
      </div>
      <div class="modal-body">
        <img src="{{selectedFile}}" class="img-fluid" />

        <setting-image-format [setting]="setting"></setting-image-format>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
        <button type="button" class="btn btn-primary" (click)="showSaveDialog()" [disabled]="setting.format == null">保存する</button>
      </div>
    </div>
  </div>
</div>
`,
  inputs: ["selectedFile"],
  directives: [ImageFormatComponent]
})

/**
 * 画像の書き出し設定を行うモダールコンポーネントです。
 */
export class SaveModal {
  private selectedFile:string;
  private setting:ImageFormatSetting = new ImageFormatSetting();

  constructor() {

  }


  private showSaveDialog() {

    let win = browserWindow.getFocusedWindow();
    let file = new FileData(this.selectedFile);
    let urlNew = file.directory + "/" + file.fileNameWithoutExtension + "." + this.setting.getExtention();

    dialog.showSaveDialog(
        win,
        // どんなダイアログを出すかを指定するプロパティ
        {
          title: 'ファイルの保存先を選択ください',
          defaultPath: urlNew
        },
        // [ファイル選択]ダイアログが閉じられた後のコールバック関数
        (filenames:string) => {
          console.log(filenames);
          if (filenames && filenames.length > 0) {
            this.saveFile(filenames);
          }
        });



  }

  private saveFile(saveFileUrl:string):void {
    console.log(saveFileUrl);
    let file = new FileSaveData(
        new FileData(this.selectedFile),
        new FileData(saveFileUrl));
    let converter = new Converter([file]);
    converter.onProgress = (progress:number) => {
      console.log(progress)
    };
    converter.onComplete = () => {
      alert("保存しました。");

      $("#myModal").modal("hide");
    };

    converter.convert(this.setting);
  }
}