export class ImageFormatType {
  static WEBP:string = "image/webp";
  static JPEG:string = "image/jpeg";
  static PNG:string = "image/png";
}

export enum ImageFormatEnum {
  WEBP,
  JPEG,
  PNG,
}

export class ImageFormatSetting {
  public format:string = ImageFormatType.WEBP;
  public quality:number = 80;

  public getEnum():ImageFormatEnum {
    let formatEnum:ImageFormatEnum;
    switch (this.format) {
      case ImageFormatType.WEBP:
        formatEnum = ImageFormatEnum.WEBP;
        break;
      case ImageFormatType.JPEG:
        formatEnum = ImageFormatEnum.JPEG;
        break;
      case ImageFormatType.PNG:
      default:
        formatEnum = ImageFormatEnum.PNG;
        break;
    }
    return formatEnum;
  }

  public getExtention():string {
    let formatExtention:string;
    switch (this.format) {
      case ImageFormatType.WEBP:
        formatExtention = "webp";
        break;
      case ImageFormatType.JPEG:
        formatExtention = "jpg";
        break;
      case ImageFormatType.PNG:
      default:
        formatExtention = "png";
        break;
    }
    return formatExtention;
  }

}