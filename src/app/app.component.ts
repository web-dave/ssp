import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SSP';
  private result: string = null;
  private userSelected: string = '';
  private mySelected: string = '';
  private sspList: string[] = ['ssp Schere', 'ssp Papier', 'ssp Stein'];

  selectSSP(e) {
    this.userSelected = e.target.className;
    this.myTurn();
  }

  myTurn() {
    this.mySelected = this.sspList[(Math.ceil(3 * Math.random()) - 1)];
    this.result = this.andTheWinnerIs(this.userSelected, this.mySelected);
  }

  andTheWinnerIs(u: string, m: string) {
    if (u === m) {
      return 'Unentschieden';
    } else {

      let uId = this.sspList.indexOf(u);
      let mId = this.sspList.indexOf(m);

      let uT = u.replace('ssp ', '');
      let mT = m.replace('ssp ', '');

      if (uId === 2 && mId === 0) {
        return `Du hast gewonnen ${uT} schlägt ${mT}`;
      }
      if (uId === 0 && mId === 2) {
        return `Ich habe gewonnen ${mT} schlägt ${uT}`;
      }
      if (uId < mId) {
        return `Du hast gewonnen ${uT} schlägt ${mT}`;
      } else {
        return `Ich habe gewonnen ${mT} schlägt ${uT}`;
      }

    }
  }
}
