System.register(["./data.image-format-type"], function(exports_1) {
    var data_image_format_type_1;
    var fs, Converter;
    return {
        setters:[
            function (data_image_format_type_1_1) {
                data_image_format_type_1 = data_image_format_type_1_1;
            }],
        execute: function() {
            fs = require('fs');
            Converter = (function () {
                function Converter(files) {
                    this.files = files;
                }
                Converter.prototype.convert = function (setting) {
                    var _this = this;
                    var base64s = [];
                    var promises = [];
                    for (var i = 0; i < this.files.length; i++) {
                        console.log(this.files[i]);
                        var promise = new Promise(function (resolve) {
                            var canvas = document.createElement("canvas");
                            var image = document.createElement("img");
                            var fileInput = _this.files[i].inputFile;
                            var fileOutput = _this.files[i].outputFile;
                            var url = fileInput.url;
                            image.onload = function () {
                                canvas.width = image.width;
                                canvas.height = image.height;
                                var context = canvas.getContext("2d");
                                context.drawImage(image, 0, 0);
                                var data;
                                var dataUrl;
                                var extention;
                                switch (setting.getEnum()) {
                                    case data_image_format_type_1.ImageFormatEnum.WEBP:
                                        data = canvas.toDataURL(setting.format, setting.quality / 100);
                                        dataUrl = data.replace(/^data:image\/webp;base64,/, "");
                                        extention = "webp";
                                        break;
                                    case data_image_format_type_1.ImageFormatEnum.JPEG:
                                        data = canvas.toDataURL(setting.format, setting.quality / 100);
                                        dataUrl = data.replace(/^data:image\/jpeg;base64,/, "");
                                        extention = "jpeg";
                                        break;
                                    case data_image_format_type_1.ImageFormatEnum.PNG:
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
                        var prog = new Promise(function (resolve) {
                            var count = i;
                            _this.progress += count / _this.files.length;
                            if (_this.onProgress != null) {
                                _this.onProgress(_this.progress);
                            }
                            // 画面ブロックの回避
                            setTimeout(function () {
                                resolve();
                            }, 50);
                        });
                        promises.push(prog);
                    }
                    Promise
                        .race(promises)
                        .then(function (results) {
                        console.log("finish!!!");
                        console.log(base64s);
                        if (_this.onComplete != null) {
                            _this.onComplete();
                        }
                    });
                };
                return Converter;
            })();
            exports_1("Converter", Converter);
        }
    }
});
//# sourceMappingURL=utils.converter.js.map