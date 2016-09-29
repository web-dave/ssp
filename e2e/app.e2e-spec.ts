import { SspPage } from './app.po';

describe('ssp App', function () {
  let page: SspPage;

  beforeEach(() => {
    page = new SspPage();
  });

  it('should display message saying SSP', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SSP');
  });

  it('should start a Game if I select Stein and add a class to #mySelected', () => {
    page.navigateTo();
    page.chooseItem('Stein');
    let ssp = '';
    (page.getAppSSP()).getAttribute('class').then(s => {
      ssp = s;
      expect(ssp).not.toEqual('');
    });
  });

  it('should start a Game if I select Stein and display message', () => {
    page.navigateTo();
    page.chooseItem('Stein');
    let ssp = '';
    let r = 'Unentschieden';
    (page.getAppSSP()).getAttribute('class').then(s => {
      ssp = s;
      switch (ssp) {
        case 'ssp Schere':
          r = 'Du hast gewonnen Stein schlägt Schere';
          break;
        case 'ssp Papier':
          r = 'Ich habe gewonnen Papier schlägt Stein';
          break;
      }
      expect(page.getResult()).toEqual(r);
    });
  });

});
