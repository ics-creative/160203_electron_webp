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
    var core_1;
    var ImageFormatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ImageFormatComponent = (function () {
                function ImageFormatComponent() {
                }
                ImageFormatComponent = __decorate([
                    core_1.Component({
                        selector: "setting-image-format",
                        template: "\n  <div class=\"radio\">\n    <label>\n      <input #radioWebp type=\"radio\" name=\"exampleRadios\" value=\"image/webp\" (change)=\"setting.format = radioWebp.value\">\n      WebP\n    </label>\n  </div>\n  <div class=\"radio\">\n    <label>\n      <input #radioPng type=\"radio\" name=\"exampleRadios\" value=\"image/png\" (change)=\"setting.format = radioPng.value\">\n      PNG\n    </label>\n  </div>\n  <div class=\"radio\">\n    <label>\n      <input #radioJpeg type=\"radio\" name=\"exampleRadios\" value=\"image/jpeg\" (change)=\"setting.format = radioJpeg.value\">\n      JPEG\n    </label>\n  </div>\n\n  <div [hidden]=\"setting.format == 'image/png'\">\n    <label>\n      <input type=\"range\" min=\"0\" max=\"100\" step=\"1\" [(ngModel)]=\"setting.quality\" placeholder=\"value\"  />\n      <input type=\"number\"\n        min=\"0\" max=\"100\" step=\"1\"\n        placeholder=\"text\"\n        [(ngModel)]=\"setting.quality\"/>\n    </label>\n  </div>\n",
                        inputs: ["setting"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ImageFormatComponent);
                return ImageFormatComponent;
            })();
            exports_1("ImageFormatComponent", ImageFormatComponent);
        }
    }
});
//# sourceMappingURL=component.image-format.js.map