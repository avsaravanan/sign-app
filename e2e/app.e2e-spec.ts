import { SignAppPage } from './app.po';

describe('sign-app App', () => {
  let page: SignAppPage;

  beforeEach(() => {
    page = new SignAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
