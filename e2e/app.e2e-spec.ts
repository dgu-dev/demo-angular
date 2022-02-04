import { Demo01Page } from './app.po';

describe('demo01 App', () => {
  let page: Demo01Page;

  beforeEach(() => {
    page = new Demo01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
