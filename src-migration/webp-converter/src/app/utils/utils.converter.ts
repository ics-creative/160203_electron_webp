import {FileSaveData} from '../data/data.file';

import {ImageFormatEnum, ImageFormatSetting} from '../data/data.image-format-type';

/**
 * 画像変換機能を備えたユーティリティークラスです。
 */
export class Converter {

  private progress = 0;
  public onProgress: Function;

  constructor(private files: FileSaveData[]) {
  }

  public async convert(setting: ImageFormatSetting): Promise<any> {
    for (let i = 0; i < this.files.length; i++) {
      await this._createFileSavePromise(this.files[i], setting, i);
    }

    // 画面更新
    await new Promise(resolve => {
      this.progress = 1.0;

      if (this.onProgress != null) {
        this.onProgress(this.progress);
      }

      setTimeout(resolve, 50);
    });
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
        let extension: string;
        
        switch (setting.getEnum()) {
          case ImageFormatEnum.WEBP:
            data      = canvas.toDataURL(setting.format, setting.quality / 100);
            dataUrl   = data.replace(/^data:image\/webp;base64,/, '');
            extension = 'webp';
            break;
          case ImageFormatEnum.JPEG:
            data      = canvas.toDataURL(setting.format, setting.quality / 100);
            dataUrl   = data.replace(/^data:image\/jpeg;base64,/, '');
            extension = 'jpeg';
            break;
          case ImageFormatEnum.PNG:
            data      = canvas.toDataURL(setting.format);
            dataUrl   = data.replace(/^data:image\/png;base64,/, '');
            extension = 'png';
            break;
        }


        fs.writeFile(fileOutput.url, dataUrl, 'base64', (error) => {
          if (error != null) {
            console.error(error);
          }

          // カウントの更新
          const count   = index + 1;
          this.progress = count / this.files.length;

          if (this.onProgress != null) {
            this.onProgress(this.progress);
          }

          resolve();
        });
      };

      image.src = fileInput.url;
    });
  }

}
