import { BeastAssignmentPage } from './app.po';

describe('beast-assignment App', () => {
  let page: BeastAssignmentPage;

  beforeEach(() => {
    page = new BeastAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to iw!!');
  });
});
