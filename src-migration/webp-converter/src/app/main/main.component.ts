import {ChangeDetectorRef, Component} from '@angular/core';
import {FileData} from '../data/data.file';
import {MdDialog} from '@angular/material';
import {SaveSignleDialogComponent} from 'app/dialog/save-single-dialog.component';
import {SaveMultiDialogComponent} from '../dialog/save-multi-dialog.component';

@Component({
  selector   : 'app-main',
  templateUrl: './main.component.html',
  styleUrls  : ['./main.component.css']
})

export class MainComponent {

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

    // const win = electron.BrowserWindow.getFocusedWindow();

    electron.remote.dialog.showOpenDialog(
      null,
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
    const dialogRef   = this.dialog.open(SaveMultiDialogComponent, {
      data  : {files: this.files}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

  private openSaveDialog(event): void {
    this.selectedFile = event;

    const dialogRef   = this.dialog.open(SaveSignleDialogComponent, {
      height: '800px',
      width : '800px',
      data  : {selectedFile: event}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
