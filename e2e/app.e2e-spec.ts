import { NgApp2Page } from './app.po';

describe('ng-app2 App', () => {
  let page: NgApp2Page;

  beforeEach(() => {
    page = new NgApp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
