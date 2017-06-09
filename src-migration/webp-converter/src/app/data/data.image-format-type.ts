/**
 * 画像フォーマットを示す定数のクラスです。
 */
export class ImageFormatType {
  static WEBP = 'image/webp';
  static JPEG = 'image/jpeg';
  static PNG = 'image/png';
}

/**
 * 画像フォーマットを示す Enum です。
 */
export enum ImageFormatEnum {
  WEBP,
  JPEG,
  PNG,
}

/**
 * 画像の書き出し設定を示すクラスです。
 */
export class ImageFormatSetting {
  public format: string = ImageFormatType.WEBP;
  public quality = 80;

  public getEnum(): ImageFormatEnum {
    let formatEnum: ImageFormatEnum;
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

  public getExtention(): string {
    let formatExtention: string;
    switch (this.format) {
      case ImageFormatType.WEBP:
        formatExtention = 'webp';
        break;
      case ImageFormatType.JPEG:
        formatExtention = 'jpg';
        break;
      case ImageFormatType.PNG:
      default:
        formatExtention = 'png';
        break;
    }
    return formatExtention;
  }

}
