export class FileData {
  public directory: string;
  public fileName: string;
  public fileNameWithoutExtension: string;
  public extension: string;

  constructor(public url: string) {

    if (!url) {
      throw new Error(`url の値 ${url} が不正です。`);
    }

    const dirArr   = url.split('/');
    const fileName = dirArr.pop();
    this.fileName  = fileName;
    this.directory = dirArr.join('/');

    const fileNameArr             = fileName.split('.');
    this.extension                = fileNameArr.pop();
    this.fileNameWithoutExtension = fileNameArr.join('.');
  }
}

/**
 * ファイルのバリューオブジェクトです。
 */
export class FileSaveData {

  constructor(public inputFile: FileData, public outputFile: FileData) {

  }

}
