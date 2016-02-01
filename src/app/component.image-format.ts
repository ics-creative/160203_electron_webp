import {Component} from "angular2/core";
import {ImageFormatSetting} from "./data.image-format-type";

@Component({
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
})

export class ImageFormatComponent {

  private setting:ImageFormatSetting;

  constructor() {

  }
}