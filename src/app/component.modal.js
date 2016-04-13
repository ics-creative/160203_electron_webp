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
    var core_1, utils_converter_1, data_file_1, data_image_format_type_1, component_image_format_1;
    var remote, dialog, browserWindow, fs, SaveModal;
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
            let SaveModal = class SaveModal {
                constructor() {
                    this.setting = new data_image_format_type_1.ImageFormatSetting();
                }
                showSaveDialog() {
                    let win = browserWindow.getFocusedWindow();
                    let file = new data_file_1.FileData(this.selectedFile);
                    let urlNew = file.directory + "/" + file.fileNameWithoutExtension + "." + this.setting.getExtention();
                    dialog.showSaveDialog(win, {
                        title: 'ファイルの保存先を選択ください',
                        defaultPath: urlNew
                    }, (filenames) => {
                        console.log(filenames);
                        if (filenames && filenames.length > 0) {
                            this.saveFile(filenames);
                        }
                    });
                }
                saveFile(saveFileUrl) {
                    console.log(saveFileUrl);
                    let file = new data_file_1.FileSaveData(new data_file_1.FileData(this.selectedFile), new data_file_1.FileData(saveFileUrl));
                    let converter = new utils_converter_1.Converter([file]);
                    converter.onProgress = (progress) => {
                        console.log(progress);
                    };
                    converter.onComplete = () => {
                        alert("保存しました。");
                        $("#myModal").modal("hide");
                    };
                    converter.convert(this.setting);
                }
            };
            SaveModal = __decorate([
                core_1.Component({
                    selector: "modal-save",
                    template: `
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">書き出し形式</h4>
      </div>
      <div class="modal-body">
        <img src="{{selectedFile}}" class="img-fluid" />

        <setting-image-format [setting]="setting"></setting-image-format>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
        <button type="button" class="btn btn-primary" (click)="showSaveDialog()" [disabled]="setting.format == null">保存する</button>
      </div>
    </div>
  </div>
</div>
`,
                    inputs: ["selectedFile"],
                    directives: [component_image_format_1.ImageFormatComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], SaveModal);
            exports_1("SaveModal", SaveModal);
        }
    }
});
