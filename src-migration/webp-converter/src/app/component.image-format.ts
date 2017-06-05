import {Component, Input} from '@angular/core';
import {ImageFormatSetting} from './data.image-format-type';
@Component({
  selector: 'app-setting-image-format',
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
        <input type="range" min="0" max="100" step="1" [(ngModel)]="setting.quality" placeholder="value"/>
        <input type="number"
               min="0" max="100" step="1"
               placeholder="text"
               [(ngModel)]="setting.quality"/>
      </label>
    </div>
  `,
})

/**
 * 画像フォーマットの設定を行うコンポーネントです。
 */
export class ImageFormatComponent {

  @Input() private setting: ImageFormatSetting;

  constructor() {

  }
}
