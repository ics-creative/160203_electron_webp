import { WebpConverterPage } from './app.po';

describe('webp-converter App', () => {
  let page: WebpConverterPage;

  beforeEach(() => {
    page = new WebpConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
