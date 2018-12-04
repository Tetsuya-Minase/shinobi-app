import { TrpgAppPage } from './app.po';

describe('trpg-app App', function() {
  let page: TrpgAppPage;

  beforeEach(() => {
    page = new TrpgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
