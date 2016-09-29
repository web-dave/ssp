import { browser, element, by } from 'protractor';

export class SspPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  chooseItem(n) {
    return element(by.css(`button.${n}`)).click();
  }

  getResult() {
    return element(by.id('result')).getText();
  }

  getAppSSP() {
    return element(by.id('mySelected'));
  }
}
