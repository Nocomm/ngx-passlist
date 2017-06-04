import { NgxPasslistPage } from './app.po';

describe('ngx-passlist App', () => {
  let page: NgxPasslistPage;

  beforeEach(() => {
    page = new NgxPasslistPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
