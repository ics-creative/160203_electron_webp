import {FileData} from "./data.file";
import {ImageFormatEnum} from "./data.image-format-type";
import {ImageFormatType} from "./data.image-format-type";
import {FileSaveData} from "./data.file";
import {ImageFormatSetting} from "./data.image-format-type";

const fs = require('fs');

/**
 * 画像変換機能を備えたユーティリティークラスです。
 */
export class Converter {

  private progress:number;
  public onProgress:Function;
  public onComplete:Function;

  constructor(private files:FileSaveData[]) {
  }

  public convert(setting:ImageFormatSetting):void {

    const base64s:string[] = [];
    const promises:Promise<any>[] = [];


    for (var i = 0; i < this.files.length; i++) {
      console.log(this.files[i]);

      let promise = new Promise((resolve:Function) => {
        let canvas = document.createElement("canvas");
        let image:HTMLImageElement = document.createElement("img");
        let fileInput = this.files[i].inputFile;
        let fileOutput = this.files[i].outputFile;
        let url = fileInput.url;

        image.onload = () => {
          canvas.width = image.width;
          canvas.height = image.height;
          let context = canvas.getContext("2d");
          context.drawImage(image, 0, 0);

          let data:string;
          let dataUrl:string;
          let extention:string;
          switch (setting.getEnum()) {
            case ImageFormatEnum.WEBP:
              data = canvas.toDataURL(setting.format, setting.quality / 100);
              dataUrl = data.replace(/^data:image\/webp;base64,/, "");
              extention = "webp";
              break;
            case ImageFormatEnum.JPEG:
              data = canvas.toDataURL(setting.format, setting.quality / 100);
              dataUrl = data.replace(/^data:image\/jpeg;base64,/, "");
              extention = "jpeg";
              break;
            case ImageFormatEnum.PNG:
              data = canvas.toDataURL(setting.format);
              dataUrl = data.replace(/^data:image\/png;base64,/, "");
              extention = "png";
              break;
          }

          fs.writeFile(fileOutput.url, dataUrl, 'base64', function (error) {
            if (error != null) {
              console.error(error);
            }
            resolve();
          });
        };
        image.src = fileInput.url;
      });
      promises.push(promise);

      let prog = new Promise((resolve:Function)=> {
        let count = i;

        this.progress += count / this.files.length;

        if (this.onProgress != null) {
          this.onProgress(this.progress);
        }

        // 画面ブロックの回避
        setTimeout(()=> {
          resolve();
        }, 16);
      });

      promises.push(prog);
    }

    Promise
        .race(promises)
        .then((results) => {
          console.log("finish!!!");
          console.log(base64s);

          if (this.onComplete != null) {
            this.onComplete();
          }
        });
  }
}