import {ChangeDetectorRef, Component} from '@angular/core';
import {FileData} from './data.file';
import {MdDialog} from '@angular/material';
import {SaveModalComponent} from 'app/component.modal';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})

export class AppComponent {

  private files: FileData[];
  private selectedFile: string;

  constructor(private ref: ChangeDetectorRef,
              private dialog: MdDialog) {
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

    const files               = <FileList> event.dataTransfer.files;
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

    console.log('loadFiles');
    console.log(electron);
    const win = null;
    // const win = electron.BrowserWindow.getFocusedWindow();
    // var BrowserWindow = remote.require('browser-window');
    const remote = electron.remote;

    console.log(win);
    // console.log(BrowserWindow)

    console.log(remote);
    console.log('remote.dialog');
    console.log(remote.dialog);

    remote.dialog.showOpenDialog(
      win,
      // どんなダイアログを出すかを指定するプロパティ
      {
        properties: ['openFile', 'multiSelections'],
        filters   : [
          {
            name      : 'Image Files',
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
      this.ref.markForCheck();
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
    // jQuery('#myModalMulti').modal();
  }

  private openSaveDialog(event): void {
    this.selectedFile = event;
    // jQuery('#myModal').modal();
    const dialogRef = this.dialog.open(SaveModalComponent, {
      height: '400px',
      width : '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
    // dialogRef.close('Pizza!');
  }
}
