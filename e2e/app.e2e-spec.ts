import { FramappAngular2Page } from './app.po';

describe('framapp-angular2 App', () => {
  let page: FramappAngular2Page;

  beforeEach(() => {
    page = new FramappAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
