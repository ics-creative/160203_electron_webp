System.register(["./data.image-format-type"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var data_image_format_type_1;
    var fs, Converter;
    return {
        setters:[
            function (data_image_format_type_1_1) {
                data_image_format_type_1 = data_image_format_type_1_1;
            }],
        execute: function() {
            fs = require('fs');
            class Converter {
                constructor(files) {
                    this.files = files;
                }
                convert(setting) {
                    const base64s = [];
                    const promises = [];
                    for (var i = 0; i < this.files.length; i++) {
                        console.log(this.files[i]);
                        let promise = new Promise((resolve) => {
                            let canvas = document.createElement("canvas");
                            let image = document.createElement("img");
                            let fileInput = this.files[i].inputFile;
                            let fileOutput = this.files[i].outputFile;
                            let url = fileInput.url;
                            image.onload = () => {
                                canvas.width = image.width;
                                canvas.height = image.height;
                                let context = canvas.getContext("2d");
                                context.drawImage(image, 0, 0);
                                let data;
                                let dataUrl;
                                let extention;
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
                        let prog = new Promise((resolve) => {
                            let count = i;
                            this.progress += count / this.files.length;
                            if (this.onProgress != null) {
                                this.onProgress(this.progress);
                            }
                            setTimeout(() => {
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
            exports_1("Converter", Converter);
        }
    }
});
