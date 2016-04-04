System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FileData, FileSaveData;
    return {
        setters:[],
        execute: function() {
            class FileData {
                constructor(url) {
                    this.url = url;
                    const dirArr = url.split("/");
                    const fileName = dirArr.pop();
                    this.fileName = fileName;
                    this.directory = dirArr.join("/");
                    const fileNameArr = fileName.split(".");
                    this.extention = fileNameArr.pop();
                    this.fileNameWithoutExtension = fileNameArr.join(".");
                }
            }
            exports_1("FileData", FileData);
            class FileSaveData {
                constructor(inputFile, outputFile) {
                    this.inputFile = inputFile;
                    this.outputFile = outputFile;
                }
            }
            exports_1("FileSaveData", FileSaveData);
        }
    }
});
