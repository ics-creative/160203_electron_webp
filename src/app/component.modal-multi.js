System.register(["angular2/core", "./utils.converter", "./data.file", "./data.image-format-type", "./component.image-format"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            remote = require('remote');
            dialog = remote.require('dialog');
            browserWindow = remote.require('browser-window');
            fs = require('fs');
            let SaveModalMulti = class SaveModalMulti {
                constructor() {
                    this.setting = new data_image_format_type_1.ImageFormatSetting();
                }
                showSaveDialog() {
                    var win = browserWindow.getFocusedWindow();
                    dialog.showOpenDialog(win, {
                        properties: ["openDirectory"]
                    }, (dir) => {
                        if (dir) {
                            this.saveFile(dir);
                        }
                    });
                }
                saveFile(dir) {
                    this.progress = 0;
                    let taskFiles = [];
                    for (let i = 0; i < this.files.length; i++) {
                        let fileInput = this.files[i];
                        let urlOutput = dir + "/" + fileInput.fileNameWithoutExtension + "." + this.setting.getExtention();
                        let fileOutput = new data_file_1.FileData(urlOutput);
                        let file = new data_file_2.FileSaveData(fileInput, fileOutput);
                        taskFiles.push(file);
                    }
                    let converter = new utils_converter_1.Converter(taskFiles);
                    converter.onProgress = (progress) => {
                        this.progress = Math.round(progress * 100);
                    };
                    converter.onComplete = () => {
                        this.progress = 1.0 * 100;
                        alert("保存しました。");
                        $("#myModalMulti").modal("hide");
                    };
                    converter.convert(this.setting);
                }
            };
            SaveModalMulti = __decorate([
                core_1.Component({
                    selector: "modal-save-multi",
                    template: `
<div class="modal fade" id="myModalMulti" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">書き出し形式</h4>
      </div>
      <div class="modal-body">
        <setting-image-format [setting]="setting"></setting-image-format>
        <progress class="progress" value="{{progress}}" max="100">{{progress}}%</progress>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
        <button type="button" class="btn btn-primary" (click)="showSaveDialog()" [disabled]="setting.format == null">保存先を選択する</button>
      </div>
    </div>
  </div>
</div>
`,
                    inputs: ["files"],
                    directives: [component_image_format_1.ImageFormatComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], SaveModalMulti);
            exports_1("SaveModalMulti", SaveModalMulti);
        }
    }
});
