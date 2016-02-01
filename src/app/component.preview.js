System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2;
    var PreviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            "use strict";
            PreviewComponent = (function () {
                function PreviewComponent() {
                    this.clickConvert = new core_2.EventEmitter();
                }
                PreviewComponent.prototype.ngAfterViewInit = function () {
                };
                PreviewComponent.prototype.getFileName = function () {
                    var urlArr = this.url.split("/");
                    var fileName = urlArr.pop();
                    return fileName;
                };
                PreviewComponent.prototype.handleSaveClick = function () {
                    this.clickConvert.emit(this.url);
                };
                PreviewComponent = __decorate([
                    core_1.Component({
                        selector: "preview",
                        template: "\n  <div class=\"card\">\n  <img class=\"card-img-top img-fluid\" data-src=\"{{url}}\" alt=\"Card image cap\">\n  <div class=\"card-block\">\n    <p class=\"card-text\"><small>{{getFileName()}}</small></p>\n    <a href=\"#\" class=\"btn btn-secondary btn-sm\" (click)=\"handleSaveClick($event)\">\u5909\u63DB\u3059\u308B</a>\n  </div>\n</div>\n",
                        styles: ["\n  "],
                        inputs: ["url"],
                        events: ["clickConvert"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PreviewComponent);
                return PreviewComponent;
            })();
            exports_1("PreviewComponent", PreviewComponent);
        }
    }
});
//# sourceMappingURL=component.preview.js.map