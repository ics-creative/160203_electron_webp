import {FileSaveData} from '../data/data.file';

import {ImageFormatEnum, ImageFormatSetting} from '../data/data.image-format-type';

/**
 * 画像変換機能を備えたユーティリティークラスです。
 */
export class Converter {

  private progress = 0;
  public onProgress: Function;
  public onComplete: Function;

  constructor(private files: FileSaveData[]) {
  }

  public async convert(setting: ImageFormatSetting): Promise<any> {
    for (let i = 0; i < this.files.length; i++) {
      await this._createFileSavePromise(this.files[i], setting, i);
    }

    // 画面更新
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    if (this.onComplete != null) {
      this.onComplete();
    }
  }

  _createFileSavePromise(file: FileSaveData, setting: ImageFormatSetting, index: number) {
    return new Promise((resolve: Function) => {
      const canvas     = document.createElement('canvas');
      const image      = document.createElement('img');
      const fileInput  = file.inputFile;
      const fileOutput = file.outputFile;
      const url        = fileInput.url;

      image.onload = () => {
        canvas.width  = image.width;
        canvas.height = image.height;
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);

        let data: string;
        let dataUrl: string;
        let extention: string;
        switch (setting.getEnum()) {
          case ImageFormatEnum.WEBP:
            data      = canvas.toDataURL(setting.format, setting.quality / 100);
            dataUrl   = data.replace(/^data:image\/webp;base64,/, '');
            extention = 'webp';
            break;
          case ImageFormatEnum.JPEG:
            data      = canvas.toDataURL(setting.format, setting.quality / 100);
            dataUrl   = data.replace(/^data:image\/jpeg;base64,/, '');
            extention = 'jpeg';
            break;
          case ImageFormatEnum.PNG:
            data      = canvas.toDataURL(setting.format);
            dataUrl   = data.replace(/^data:image\/png;base64,/, '');
            extention = 'png';
            break;
        }


        fs.writeFile(fileOutput.url, dataUrl, 'base64', (error) => {
          if (error != null) {
            console.error(error);
          }

          // カウントの更新
          const count   = index;
          this.progress = count / this.files.length;

          if (this.onProgress != null) {
            this.onProgress(this.progress);
          }

          resolve();
        });
      };
      image.src    = fileInput.url;
    });
  }

}
