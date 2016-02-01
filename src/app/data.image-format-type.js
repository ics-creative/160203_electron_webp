System.register([], function(exports_1) {
    var ImageFormatType, ImageFormatEnum, ImageFormatSetting;
    return {
        setters:[],
        execute: function() {
            ImageFormatType = (function () {
                function ImageFormatType() {
                }
                ImageFormatType.WEBP = "image/webp";
                ImageFormatType.JPEG = "image/jpeg";
                ImageFormatType.PNG = "image/png";
                return ImageFormatType;
            })();
            exports_1("ImageFormatType", ImageFormatType);
            (function (ImageFormatEnum) {
                ImageFormatEnum[ImageFormatEnum["WEBP"] = 0] = "WEBP";
                ImageFormatEnum[ImageFormatEnum["JPEG"] = 1] = "JPEG";
                ImageFormatEnum[ImageFormatEnum["PNG"] = 2] = "PNG";
            })(ImageFormatEnum || (ImageFormatEnum = {}));
            exports_1("ImageFormatEnum", ImageFormatEnum);
            ImageFormatSetting = (function () {
                function ImageFormatSetting() {
                    this.format = ImageFormatType.WEBP;
                    this.quality = 80;
                }
                ImageFormatSetting.prototype.getEnum = function () {
                    var formatEnum;
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
                };
                ImageFormatSetting.prototype.getExtention = function () {
                    var formatExtention;
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
                };
                return ImageFormatSetting;
            })();
            exports_1("ImageFormatSetting", ImageFormatSetting);
        }
    }
});
//# sourceMappingURL=data.image-format-type.js.map