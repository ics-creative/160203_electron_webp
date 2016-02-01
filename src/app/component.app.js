System.register(['angular2/core', "./data.file", "./component.preview", "./component.modal", "./component.modal-multi"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_file_1, component_preview_1, component_modal_1, component_modal_multi_1;
    var remote, dialog, browserWindow, fs, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_file_1_1) {
                data_file_1 = data_file_1_1;
            },
            function (component_preview_1_1) {
                component_preview_1 = component_preview_1_1;
            },
            function (component_modal_1_1) {
                component_modal_1 = component_modal_1_1;
            },
            function (component_modal_multi_1_1) {
                component_modal_multi_1 = component_modal_multi_1_1;
            }],
        execute: function() {
            "use strict";
            remote = require('remote');
            dialog = remote.require('dialog');
            browserWindow = remote.require('browser-window');
            fs = require('fs');
            AppComponent = (function () {
                function AppComponent() {
                }
                /**
                 * 読み込みするためのファイルを開く
                 */
                AppComponent.prototype.loadFiles = function () {
                    var _this = this;
                    var win = browserWindow.getFocusedWindow();
                    dialog.showOpenDialog(win, 
                    // どんなダイアログを出すかを指定するプロパティ
                    {
                        properties: ["openFile", "multiSelections"],
                        filters: [
                            {
                                name: "Image Files",
                                extensions: ["png", "gif", "jpeg", "jpg", "svg", "webp"]
                            }
                        ]
                    }, 
                    // [ファイル選択]ダイアログが閉じられた後のコールバック関数
                    function (filenames) {
                        _this.updateFiles(filenames);
                    });
                    // バインディングのトリガー・・・
                    setInterval(function () {
                        _this.files;
                    }, 1000);
                };
                AppComponent.prototype.updateFiles = function (filenames) {
                    var files = [];
                    for (var i = 0; i < filenames.length; i++) {
                        files.push(new data_file_1.FileData(filenames[i]));
                    }
                    this.files = files;
                };
                AppComponent.prototype.saveFiles = function () {
                    $("#myModalMulti").modal();
                };
                AppComponent.prototype.openSaveDialog = function (event) {
                    this.selectedFile = event;
                    $("#myModal").modal();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app-html/component.app.html",
                        styles: ["\n    .my-card-holder {\n      padding : 70px 0 70px;\n    }\n  "],
                        directives: [component_preview_1.PreviewComponent, component_modal_1.SaveModal, component_modal_multi_1.SaveModalMulti]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=component.app.js.map