import { browser, by, element } from 'protractor';

export class BeastAssignmentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('iw-root h1')).getText();
  }
}
