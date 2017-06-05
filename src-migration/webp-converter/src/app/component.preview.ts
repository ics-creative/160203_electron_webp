import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-preview',
  template: `
    <md-card>
      <img md-card-image
           data-src="{{url}}"
           alt="Card image cap"/>
      
      <md-card-content>
        {{getFileName()}}
      </md-card-content>

      <md-card-actions>
        <button md-button
                (click)="handleSaveClick($event)">
          変換する
        </button>
      </md-card-actions>
    </md-card>
  `,
  styles  : [`
  `]
  // events: ['clickConvert']
})

/**
 * プレビューを行うコンポーネントです。
 */
export class PreviewComponent implements AfterViewInit {
  @Input() private url: string;
  @Output() private clickConvert: EventEmitter<string> = new EventEmitter();

  ngAfterViewInit() {
  }

  private getFileName(): string {
    const urlArr   = this.url.split('/');
    const fileName = <string>urlArr.pop();
    return fileName;
  }

  private handleSaveClick(): void {
    this.clickConvert.emit(this.url);
  }
}
