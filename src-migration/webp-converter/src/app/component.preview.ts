import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-preview',
  template: `
    <div class="card">
      <img class="card-img-top img-fluid" data-src="{{url}}" alt="Card image cap">
      <div class="card-block">
        <p class="card-text">
          <small>{{getFileName()}}</small>
        </p>
        <a href="#" class="btn btn-secondary btn-sm" (click)="handleSaveClick($event)">変換する</a>
      </div>
    </div>
    
  `,
  styles: [`
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
    const urlArr = this.url.split('/');
    const fileName = <string>urlArr.pop();
    return fileName;
  }

  private handleSaveClick(): void {
    this.clickConvert.emit(this.url);
  }
}
