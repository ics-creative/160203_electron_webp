import {Component} from "angular2/core";
import {AfterViewInit} from "angular2/core";
import {ViewChild} from "angular2/core";
import {EventEmitter} from "angular2/core";

"use strict";

@Component({
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
  styles : [`
  `],
  inputs: ["url"],
  events: ["clickConvert"]
})

/**
 * プレビューを行うコンポーネントです。
 */
export class PreviewComponent implements AfterViewInit {
  private url:string;
  private clickConvert:EventEmitter<string> = new EventEmitter();

  ngAfterViewInit() {
  }

  private getFileName():string {
    let urlArr = this.url.split("/");
    let fileName = <string>urlArr.pop();
    return fileName;
  }

  private handleSaveClick():void{
    this.clickConvert.emit(this.url);
  }
}