export class FileData {
  public directory:string;
  public fileName:string;
  public fileNameWithoutExtension:string;
  public extention:string;

  constructor(public url:string) {
    const dirArr = url.split("/");
    const fileName = dirArr.pop();
    this.fileName = fileName;
    this.directory = dirArr.join("/");

    const fileNameArr = fileName.split(".");
    this.extention = fileNameArr.pop();
    this.fileNameWithoutExtension = fileNameArr.join(".");
  }
}

/**
 * ファイルのバリューオブジェクトです。
 */
export class FileSaveData {

  constructor(public inputFile:FileData, public outputFile:FileData) {

  }

}