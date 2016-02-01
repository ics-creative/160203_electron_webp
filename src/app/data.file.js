System.register([], function(exports_1) {
    var FileData, FileSaveData;
    return {
        setters:[],
        execute: function() {
            FileData = (function () {
                function FileData(url) {
                    this.url = url;
                    var dirArr = url.split("/");
                    var fileName = dirArr.pop();
                    this.fileName = fileName;
                    this.directory = dirArr.join("/");
                    var fileNameArr = fileName.split(".");
                    this.extention = fileNameArr.pop();
                    this.fileNameWithoutExtension = fileNameArr.join(".");
                }
                return FileData;
            })();
            exports_1("FileData", FileData);
            FileSaveData = (function () {
                function FileSaveData(inputFile, outputFile) {
                    this.inputFile = inputFile;
                    this.outputFile = outputFile;
                }
                return FileSaveData;
            })();
            exports_1("FileSaveData", FileSaveData);
        }
    }
});
//# sourceMappingURL=data.file.js.map