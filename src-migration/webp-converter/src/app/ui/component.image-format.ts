import {Component, Input} from '@angular/core';
import {ImageFormatSetting} from '../data/data.image-format-type';

@Component({
  selector: 'app-setting-image-format',
  template: `

    <md-radio-group [(ngModel)]="setting.format">
      <md-radio-button [value]="'image/webp'">
        WebP
      </md-radio-button>
      <md-radio-button [value]="'image/png'">
        PNG
      </md-radio-button>
      <md-radio-button [value]="'image/jpeg'">
        JPEG
      </md-radio-button>
    </md-radio-group>


    <div [hidden]="setting.format == 'image/png'">
      <md-slider [(value)]="setting.quality"
                 [min]="0" 
                 [max]="100"
                 [step]="1"
                 [thumb-label]="true">
      </md-slider>
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
