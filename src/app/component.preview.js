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
            let PreviewComponent = class PreviewComponent {
                constructor() {
                    this.clickConvert = new core_2.EventEmitter();
                }
                ngAfterViewInit() {
                }
                getFileName() {
                    let urlArr = this.url.split("/");
                    let fileName = urlArr.pop();
                    return fileName;
                }
                handleSaveClick() {
                    this.clickConvert.emit(this.url);
                }
            };
            PreviewComponent = __decorate([
                core_1.Component({
                    selector: "preview",
                    template: `
  <div class="card">
  <img class="card-img-top img-fluid" data-src="{{url}}" alt="Card image cap">
  <div class="card-block">
    <p class="card-text"><small>{{getFileName()}}</small></p>
    <a href="#" class="btn btn-secondary btn-sm" (click)="handleSaveClick($event)">変換する</a>
  </div>
</div>
`,
                    styles: [`
  `],
                    inputs: ["url"],
                    events: ["clickConvert"]
                }), 
                __metadata('design:paramtypes', [])
            ], PreviewComponent);
            exports_1("PreviewComponent", PreviewComponent);
        }
    }
});
