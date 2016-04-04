System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var ImageFormatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ImageFormatComponent = class ImageFormatComponent {
                constructor() {
                }
            };
            ImageFormatComponent = __decorate([
                core_1.Component({
                    selector: "setting-image-format",
                    template: `
  <div class="radio">
    <label>
      <input #radioWebp type="radio" name="exampleRadios" value="image/webp" (change)="setting.format = radioWebp.value">
      WebP
    </label>
  </div>
  <div class="radio">
    <label>
      <input #radioPng type="radio" name="exampleRadios" value="image/png" (change)="setting.format = radioPng.value">
      PNG
    </label>
  </div>
  <div class="radio">
    <label>
      <input #radioJpeg type="radio" name="exampleRadios" value="image/jpeg" (change)="setting.format = radioJpeg.value">
      JPEG
    </label>
  </div>

  <div [hidden]="setting.format == 'image/png'">
    <label>
      <input type="range" min="0" max="100" step="1" [(ngModel)]="setting.quality" placeholder="value"  />
      <input type="number"
        min="0" max="100" step="1"
        placeholder="text"
        [(ngModel)]="setting.quality"/>
    </label>
  </div>
`,
                    inputs: ["setting"]
                }), 
                __metadata('design:paramtypes', [])
            ], ImageFormatComponent);
            exports_1("ImageFormatComponent", ImageFormatComponent);
        }
    }
});
