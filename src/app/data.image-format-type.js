System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ImageFormatType, ImageFormatEnum, ImageFormatSetting;
    return {
        setters:[],
        execute: function() {
            class ImageFormatType {
            }
            ImageFormatType.WEBP = "image/webp";
            ImageFormatType.JPEG = "image/jpeg";
            ImageFormatType.PNG = "image/png";
            exports_1("ImageFormatType", ImageFormatType);
            (function (ImageFormatEnum) {
                ImageFormatEnum[ImageFormatEnum["WEBP"] = 0] = "WEBP";
                ImageFormatEnum[ImageFormatEnum["JPEG"] = 1] = "JPEG";
                ImageFormatEnum[ImageFormatEnum["PNG"] = 2] = "PNG";
            })(ImageFormatEnum || (ImageFormatEnum = {}));
            exports_1("ImageFormatEnum", ImageFormatEnum);
            class ImageFormatSetting {
                constructor() {
                    this.format = ImageFormatType.WEBP;
                    this.quality = 80;
                }
                getEnum() {
                    let formatEnum;
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
                getExtention() {
                    let formatExtention;
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
            exports_1("ImageFormatSetting", ImageFormatSetting);
        }
    }
});
