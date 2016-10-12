import { FramAppNgPage } from './app.po';

describe('fram-app-ng App', function() {
  let page: FramAppNgPage;

  beforeEach(() => {
    page = new FramAppNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
