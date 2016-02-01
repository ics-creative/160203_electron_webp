System.register(["angular2/core", "./utils.converter", "./data.file", "./data.image-format-type", "./component.image-format"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, utils_converter_1, data_file_1, data_file_2, data_image_format_type_1, component_image_format_1;
    var remote, dialog, browserWindow, fs, SaveModalMulti;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_converter_1_1) {
                utils_converter_1 = utils_converter_1_1;
            },
            function (data_file_1_1) {
                data_file_1 = data_file_1_1;
                data_file_2 = data_file_1_1;
            },
            function (data_image_format_type_1_1) {
                data_image_format_type_1 = data_image_format_type_1_1;
            },
            function (component_image_format_1_1) {
                component_image_format_1 = component_image_format_1_1;
            }],
        execute: function() {
            "use strict";
            remote = require('remote');
            dialog = remote.require('dialog');
            browserWindow = remote.require('browser-window');
            fs = require('fs');
            SaveModalMulti = (function () {
                function SaveModalMulti() {
                    this.setting = new data_image_format_type_1.ImageFormatSetting();
                }
                SaveModalMulti.prototype.showSaveDialog = function () {
                    var _this = this;
                    var win = browserWindow.getFocusedWindow();
                    dialog.showOpenDialog(win, 
                    // どんなダイアログを出すかを指定するプロパティ
                    {
                        properties: ["openDirectory"]
                    }, 
                    // [ファイル選択]ダイアログが閉じられた後のコールバック関数
                    function (dir) {
                        _this.saveFile(dir);
                    });
                };
                SaveModalMulti.prototype.saveFile = function (dir) {
                    var _this = this;
                    this.progress = 0;
                    var taskFiles = [];
                    for (var i = 0; i < this.files.length; i++) {
                        var fileInput = this.files[i];
                        var urlOutput = dir + "/" + fileInput.fileNameWithoutExtension + "." + this.setting.getExtention();
                        var fileOutput = new data_file_1.FileData(urlOutput);
                        var file = new data_file_2.FileSaveData(fileInput, fileOutput);
                        taskFiles.push(file);
                    }
                    var converter = new utils_converter_1.Converter(taskFiles);
                    converter.onProgress = function (progress) {
                        _this.progress = Math.round(progress * 100);
                    };
                    converter.onComplete = function () {
                        _this.progress = 1.0 * 100;
                        alert("保存しました。");
                        $("#myModalMulti").modal("hide");
                    };
                    converter.convert(this.setting);
                };
                SaveModalMulti = __decorate([
                    core_1.Component({
                        selector: "modal-save-multi",
                        template: "\n<div class=\"modal fade\" id=\"myModalMulti\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n      </div>\n      <div class=\"modal-body\">\n        <setting-image-format [setting]=\"setting\"></setting-image-format>\n        <progress class=\"progress\" value=\"{{progress}}\" max=\"100\">{{progress}}%</progress>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\u9589\u3058\u308B</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"showSaveDialog()\" [disabled]=\"setting.format == null\">\u4FDD\u5B58\u3059\u308B</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        inputs: ["files"],
                        directives: [component_image_format_1.ImageFormatComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SaveModalMulti);
                return SaveModalMulti;
            })();
            exports_1("SaveModalMulti", SaveModalMulti);
        }
    }
});
//# sourceMappingURL=component.modal-multi.js.map